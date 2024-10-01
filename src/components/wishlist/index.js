import React from "react";
import styles from "./style.module.css";
import WishlistIcon from "../../icons/wishlistIcon";

const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <WishlistIcon />
    </div>
  );
};

export default Wishlist;
