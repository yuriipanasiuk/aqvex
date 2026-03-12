import type { FC } from "react";
import type { IProductInterface } from "@/components/types";
import styles from "./product-card-item.module.css";
import DiscountBadge from "@/components/product-list/components/discount-badge";

import Rating from "@/components/product-list/components/rating";
import AvailabilityBar from "@/components/product-list/components/availability-bar";
import ByProductButton from "@/components/product-list/components/by-product-button";
import VolumeSelect from "@/components/product-list/components/volume-select";

interface ProductCardItemProps {
  item: IProductInterface;
}

const ProductCardItem: FC<ProductCardItemProps> = ({ item }) => {
  const activeStarsCount = Math.ceil(item.rating);

  return (
    <div className={styles.itemWrapper}>
      <img
        className={styles.itemImage}
        src="/images/card-image.png"
        alt={item.slug}
      />

      <div className={styles.priceWrapper}>
        <p className={styles.oldPrice}>{item.old_price}</p>
        <p className={styles.price}>
          {item.price}
          {item.currency}
        </p>

        <DiscountBadge discount={item.discount_percent} />
      </div>

      <p className={styles.productName}>{item.name}</p>

      <Rating rating={activeStarsCount} count={item.reviews_count} />
      <AvailabilityBar available={item.in_stock} category={item.category} />

      <div className={styles.actionsWrapper}>
        {item.in_stock && (
          <VolumeSelect
            volumes={item.volumes}
            selectedId={item.selected_volume_id}
          />
        )}

        <ByProductButton disabled={!item.in_stock} />
      </div>
    </div>
  );
};

export default ProductCardItem;
