import type { FC } from "react";
import VectorIcon from "@/components/common/vector-icon";
import styles from "./availability-bar.module.css";

interface AvailabilityBarProps {
  available: boolean;
  category: string;
}

const AvailabilityBar: FC<AvailabilityBarProps> = ({ available, category }) => {
  return (
    <div className={styles.availabilityWrapper}>
      {available ? (
        <div className={styles.isInStock}>
          <VectorIcon id="in-stock" /> <p>В наличии</p>
        </div>
      ) : (
        <p>Нет в наличии</p>
      )}

      <span className={styles.drop}>
        <VectorIcon id="drop" />
      </span>

      <p className={styles.category}>{category}</p>
    </div>
  );
};

export default AvailabilityBar;
