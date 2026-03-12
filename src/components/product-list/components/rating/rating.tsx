import VectorIcon from "@/components/common/vector-icon";
import type { FC } from "react";
import styles from "./rating.module.css";

interface RatingProps {
  rating: number;
  count: number;
}

const Rating: FC<RatingProps> = ({ rating, count }) => {
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, index) => (
          <VectorIcon key={index} id="add_to_wishes" width="12" height="11" />
        ))}
      </div>
      <p className={styles.reviewsCount}>{count}</p>
    </div>
  );
};

export default Rating;
