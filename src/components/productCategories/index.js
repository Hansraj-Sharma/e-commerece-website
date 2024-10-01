import React from "react";
import styles from "./style.module.css";

const ProductCategories = ({ name, imgUrl, text, bgColor }) => {
  return (
    <div className={styles.product_box}>
      <div className={`${styles.product_image} ${styles[bgColor]}`}>
        {imgUrl ? <img src={imgUrl} alt='product img' /> : <span>{text}</span>}
      </div>
      <div className={styles.product_content}>{name}</div>
    </div>
  );
};

export default ProductCategories;
