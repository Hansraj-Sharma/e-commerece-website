import React from "react";
import styles from "./style.module.css";
import Button from "../button";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Row>
      <Col lg={6} sm={12} xs={12} className='pb-4'>
        <div className={styles.first_banner}>
          <div className={styles.fb_content}>
            <div className={styles.fb_price}>
              best <br /> price<span>$69</span>
            </div>
            <div className={styles.fb_quantity}>
              3-Pack Cotton Rib <br /> Bodysuits
            </div>
            <Button text={"Shop Now"} type={"outline"} size={"medium"} />
          </div>
        </div>
      </Col>
      <Col lg={6} sm={12} xs={12} className='pb-4'>
        <div className={styles.second_banner}>
          <div className={styles.sb_content}>
            <div className={styles.sb_offer}>
              <span>10% OFF</span> <br /> for Diapers
            </div>
            <div className={styles.sb_profit}>
              3Earn 10% Cash back onb <br /> Swatbabymall.
              <Link> Expore Now!</Link>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
