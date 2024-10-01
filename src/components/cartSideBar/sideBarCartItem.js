import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const CartSideBarItem = ({ imgUrl, name, color, price, quantity }) => {
  return (
    <div className={styles.product_box}>
      <div className={styles.product_detail}>
        <Link to={"#"} className={styles.product_img}>
          <img src={imgUrl} alt='product-img' />
        </Link>
        <div className={styles.product_info}>
          <div className={styles.product_name}>{name}</div>
          <div className={styles.product_color}>color: {color}</div>
          <div className={styles.product_quotient}>
            <button>-</button>
            <input
              type='number'
              value={quantity}
              className={styles.product_count}
            />

            <button>+</button>
          </div>
        </div>
      </div>
      <div className={styles.product_price}>
        <div className={styles.price}>${price}</div>
        <button className={styles.close_button}>x</button>
      </div>
    </div>
  );
};

export default CartSideBarItem;
