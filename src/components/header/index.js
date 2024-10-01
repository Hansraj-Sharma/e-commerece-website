import React from "react";
import styles from "./style.module.css";
import OfferBar from "./offerBar";
import SearchBar from "./searchBar";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <OfferBar />
      <SearchBar />
      <Navbar />
    </div>
  );
};

export default Header;
