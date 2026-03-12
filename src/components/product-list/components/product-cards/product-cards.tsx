import { type FC, useMemo, useState } from "react";
import type { IProductInterface } from "@/types";
import ProductCardItem from "@/components/product-list/components/product-card-item";
import styles from "./product-cards.module.css";
import VectorIcon from "@/components/common/vector-icon";
import clsx from "clsx";

type SortDirection = "ASC" | "DESC";

interface ProductCardProps {
  items: IProductInterface[];
}

const ProductCards: FC<ProductCardProps> = ({ items }) => {
  const [direction, setDirection] = useState<SortDirection>("ASC");

  const handleSort = () => {
    setDirection((prev) => (prev === "ASC" ? "DESC" : "ASC"));
  };

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      return direction === "ASC" ? a.rating - b.rating : b.rating - a.rating;
    });
  }, [items, direction]);

  return (
    <>
      <div className={styles.sortingWrapper}>
        <p className={styles.countText}>{items.length} товаров</p>

        <button className={styles.sortButton} onClick={handleSort}>
          <span className={styles.sortIcon}>
            <VectorIcon id="sort" />
          </span>
          По популярности
          <span
            className={clsx(
              styles.sortIconArrow,
              direction === "ASC" && styles.rotated,
            )}
          >
            <VectorIcon id="arrow" />
          </span>
        </button>
      </div>

      <div className={styles.wrapper}>
        {sortedItems.map((item) => (
          <ProductCardItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductCards;
