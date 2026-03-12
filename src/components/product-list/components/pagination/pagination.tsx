import styles from "./pagination.module.css";
import clsx from "clsx";
import VectorIcon from "@/components/common/vector-icon";
import type { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return [...new Set(pages)];
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <VectorIcon id="arrow-left" width="24" height="24" />
      </button>

      <div className={styles.pages}>
        {getPages().map((page, index) => (
          <button
            key={index}
            className={clsx(styles.pageItem, {
              [styles.active]: page === currentPage,
              [styles.dots]: page === "...",
            })}
            disabled={page === "..."}
            onClick={() => typeof page === "number" && onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.arrow}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <VectorIcon id="arrow-right" width="24" height="24" />
      </button>
    </div>
  );
};

export default Pagination;
