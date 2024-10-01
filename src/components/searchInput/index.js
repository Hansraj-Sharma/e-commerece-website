import React from "react";
import styles from "./style.module.css";
import SearchIcon from "../../icons/searchIcon";

const SearchInput = () => {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Search anything...' />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
