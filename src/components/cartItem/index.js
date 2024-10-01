import React from "react";
import styles from "./style.module.css";
import Button from "../button";

const CartItem = ({ imgUrl, price, count, name, profit }) => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.ci_left}>
        <div className={styles.product_img}>
          <img src={imgUrl} alt='product img' />
        </div>
        <div className={styles.save_price}>
          save<span> ${profit}</span>
        </div>
      </div>
      <div className={styles.ci_right}>
        <div className={styles.product_count}>({count})</div>
        <div className={styles.product_name}>{name} </div>
        <div className={styles.product_price}> {price} </div>
        <div className={styles.count}>
          <button>-</button>
          <input type='number' name='number' />
          <button>+</button>
        </div>
        <div className={styles.shipping_btn}>
          <Button
            text={"free shipping"}
            size={"large"}
            bg={"lightGreen"}
            customCss={styles.button}
          />
        </div>
        <div className={styles.stock}>
          <span></span> In stock
        </div>
      </div>
    </div>
  );
};

export default CartItem;
