import Container from "@/components/common/container";
import { type FC, useEffect, useMemo, useState } from "react";
import axios from "axios";

import type { IProductInterface } from "@/components/types";
import ProductCards from "@/components/product-list/components/product-cards";
import SearchInput from "@/components/product-list/components/search-input";
import Pagination from "@/components/product-list/components/pagination";
import { ITEMS_PER_PAGE } from "@/utils/constants";

const ProductList: FC = () => {
  const [productList, setProductList] = useState<IProductInterface[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products",
        );
        if (data?.data?.products) {
          setProductList(data.data.products);
        }
      } catch (e) {
        console.error("Ошибка при погрузке товаров:", e);
      }
    })();
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase();
    return productList.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
  }, [search, productList]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const lastItemIndex = currentPage * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    return filteredProducts.slice(firstItemIndex, lastItemIndex);
  }, [currentPage, filteredProducts]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <main>
      <Container>
        <SearchInput search={search} onSearch={handleSearch} />

        {currentItems.length > 0 ? (
          <>
            <ProductCards items={currentItems} />

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <p>Ничего не найдено по запросу "{search}"</p>
        )}
      </Container>
    </main>
  );
};

export default ProductList;
