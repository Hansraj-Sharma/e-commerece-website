import React, { Fragment } from "react";
import styles from "./style.module.css";
import img1 from "../../assets/images/blog-card-img1.png";
import img2 from "../../assets/images/blog-card-img2.png";
import img3 from "../../assets/images/blog-card-img3.png";
import img4 from "../../assets/images/blog-card-img4.png";
import CloseIcon from "../../icons/closeIcon";
import Button from "../../components/button";
import CartSideBarItem from "./sideBarCartItem";

const CartData = [
  {
    image: img1,
    title: "child image",
    color: "black",
    price: "234",
    quantity: "4",
  },
  {
    image: img2,
    title: "child image",
    color: "black",
    price: "234",
    quantity: "4",
  },
  {
    image: img3,
    title: "child image",
    color: "black",
    price: "234",
    quantity: "4",
  },
  {
    image: img4,
    title: "child image",
    color: "black",
    price: "234",
    quantity: "4",
  },
];

const CardSidebar = ({ CartBar, onClose }) => {
  return (
    <Fragment>
      <div className={`${styles.cardSidebar} ${CartBar ? styles.open : ""}`}>
        <div className={styles.cs_head}>
          <div className={styles.cs_inner}>
            <div className={styles.cs_title}>Cart</div>
            <button onClick={onClose} className={styles.cs_close_button}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={styles.cs_body}>
          {CartData.map((value, index) => (
            <CartSideBarItem
              key={index}
              quantity={value.quantity}
              imgUrl={value.image}
              name={value.title}
              color={value.color}
              price={value.price}
            />
          ))}
        </div>
        <div className={styles.cs_footer}>
          <div className={styles.csf_inner}>
            <div className={styles.csf_info}>
              <div className={styles.sub_total}>
                Subtotal <span>$99.00</span>
              </div>
              <div className={styles.total}>
                Total <span>$234.00</span>
              </div>
              <div className={styles.btn}>
                <div className={styles.checkout_btn}>
                  <Button
                    text={"CheckOut"}
                    size={"large"}
                    bg={"green"}
                    customCss={styles.check_btn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={onClose}
        className={`${styles.cs_overlay} ${CartBar ? styles.open : ""}`}></div>
    </Fragment>
  );
};

export default CardSidebar;
