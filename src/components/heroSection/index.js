import React from "react";
import styles from "./style.module.css";
import { Col, Row } from "react-bootstrap";
import Button from "../button";

const HeroSection = ({ subTitle, title1, title2, description, imgUrl }) => {
  return (
    <Row className={styles.heroSection}>
      <Col lg={5} xs={6}>
        <div className={styles.hs_content}>
          <div className={styles.hs_sub_title}>{subTitle}</div>
          <div className={styles.hs_title}>
            <span>{title1}</span>
            {title2}
          </div>
          <div className={styles.hs_description}>{description}</div>
          <div className={styles.hs_button}>
            <Button text={"SHOP NOW"} type={"fill"} size={"large"} />
          </div>
        </div>
      </Col>
      <Col lg={7} xs={6}>
        <div className={styles.hs_img}>
          <img src={imgUrl} alt='hs img' />
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
