import React from "react";
import styles from "./style.module.css";
import StarIcon from "../../icons/starIcon";
import { Col } from "react-bootstrap";
import WishlistIcon from "../../icons/wishlistIcon";
import { Link } from "react-router-dom";
import img2 from "../../assets/images/gift-img.png";

const ProductCard = ({ name, imgUrl, price, purchase }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_box}>
        <div className={styles.pb_slide}>
          <Link className={styles.pb_img}>
            <img src={imgUrl} alt='product img' />
          </Link>
          <div className={styles.product_updates}>
            <span className={styles.product_info}>{"new"}</span>
            <span className={styles.product_info}>{"gift"}</span>
          </div>
        </div>
        <div className={styles.pb_content}>
          <div className={styles.pb_head}>
            <Link className={styles.pb_name}>{name}</Link>
            <div className={styles.pb_rating}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          <div className={styles.pb_footer}>
            <div className={styles.present_price}> {price}</div>
            <div className={styles.other_info}>
              <div className={styles.purchase_count}>
                <span>{purchase} </span> Purchases
              </div>
              <button className={styles.wishlist}>
                <WishlistIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gift_card}>
        <div className={styles.gc_img}>
          <img src={img2} alt='gift img' />
        </div>
        <div className={styles.gc_content}>
          <ul>
            <li className={styles.list_item}>
              Buy<span className={styles.count}> 02</span> boxes get a
              <b> Snack Tray</b>
            </li>
            <li className={styles.list_item}>
              Buy <span className={styles.count}> 04</span> boxes get a
              <b>free Block Toys</b>
            </li>
          </ul>
          <div className={styles.expire_date}>
            Promotion will expires in: 9h00pm, 25/5/2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
