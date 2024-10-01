import React from "react";
import styles from "./style.module.css";
import logoImg from "../../assets/images/logo2.png";
import img1 from "../../assets/images/banner3.png";
import Button from "../button";
import { Col } from "react-bootstrap";

const OfferBanner = () => {
  return (
    <div className={styles.banner_box}>
      <div className={styles.content}>
        <Col lg={6} xs={6} className={styles.content_images}>
          <div className={styles.logo}>
            <img src={logoImg} alt='logo img' />
          </div>
          <div className={styles.img}>
            <img src={img1} alt='banner img' />
          </div>
        </Col>
        <Col lg={6} xs={6} className={styles.text}>
          <div className={styles.title_box}>
            <div className={styles.sub_title}>
              Pay with 4 installment, 0% interest
            </div>
            <div className={styles.title}>
              <span>Buy Now,</span> Pay Later
            </div>
          </div>
          <div className={styles.button}>
            <Button text={"DISCOVER NOW"} type={"outline"} size={"medium"} />
          </div>
        </Col>
      </div>
    </div>
  );
};

export default OfferBanner;
