import styles from "./by-product-button.module.css";
import VectorIcon from "@/components/common/vector-icon";
import type { FC } from "react";
import clsx from "clsx";

interface ByProductButtonProps {
  disabled: boolean;
}

const ByProductButton: FC<ByProductButtonProps> = ({ disabled }) => {
  return (
    <button
      className={clsx(styles.byProductButton, disabled && styles.disabled)}
      disabled={disabled}
    >
      <VectorIcon id="shopping-cart" width="26" height="26" />
      <span>В корзину</span>
    </button>
  );
};

export default ByProductButton;
