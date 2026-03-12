import type { FC } from "react";
import styles from "./search-input.module.css";
import VectorIcon from "@/components/common/vector-icon";

interface SearchInputProps {
  search: string;
  onSearch: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ search, onSearch }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
        autoFocus={true}
      />

      <div className={styles.iconWrapper}>
        <VectorIcon id="search" width="21" height="21" />
      </div>
    </div>
  );
};

export default SearchInput;
