import React from "react";
import styles from "./style.module.css";
import StarIcon from "../../icons/starIcon";
import { Col } from "react-bootstrap";
import WishlistIcon from "../../icons/wishlistIcon";
import { Link } from "react-router-dom";
import Button from "../button";

const ProductBox = ({
  name,
  imgUrl,
  price,
  pastPrice,
  offer,
  purchase,
  id,
}) => {
  return (
    <div className={styles.product_box}>
      <div className={styles.pb_head}>
        <Link to={`/singleProductPage/${id}`} className={styles.pb_name}>
          {name}
        </Link>
        <div className={styles.pb_rating}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className={styles.pb_slide}>
        <Link to={`/singleProductPage/${id}`} className={styles.pb_img}>
          <img src={imgUrl} alt='product img' />
        </Link>
        <span className={styles.product_info}>{"new"}</span>
        <div className={styles.addToCart_btn}>
          <Button text={"Add To Cart"} type={"medium"} bg={"black"} />
        </div>
      </div>
      <div className={styles.pb_footer}>
        <div className={styles.pb_cost_detail}>
          <div className={styles.present_price}>${price}</div>
          <del className={styles.past_price}>${pastPrice}</del>
          <div className={styles.offer}>{offer} OFF</div>
        </div>
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
  );
};

export default ProductBox;
