import styles from "./discount-badge.module.css";
import type { FC } from "react";
import VectorIcon from "@/components/common/vector-icon";

interface DiscountBadgeProps {
  discount: number;
}

const DiscountBadge: FC<DiscountBadgeProps> = ({ discount }) => {
  return (
    <div className={styles.badge}>
      <VectorIcon id="triangle" width="9" height="18" />

      <div className={styles.value}>{discount}%</div>

      <VectorIcon id="tail" width="3" height="18" />
    </div>
  );
};

export default DiscountBadge;
