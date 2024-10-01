import React from "react";
import styles from "./style.module.css";

const DealTime = () => {
  return (
    <div className={styles.deal_time}>
      <div className={styles.dt_title}>Until the end of the sale:</div>
      <div className={styles.d_time}>
        <div className={styles.offer_time}>
          47
          <span>days</span>
        </div>
        <div className={styles.offer_time}>
          06
          <span>hours</span>
        </div>
        <div className={styles.offer_time}>
          59
          <span>minutes</span>
        </div>
        <div className={styles.offer_time}>
          59
          <span>sec.</span>
        </div>
      </div>
    </div>
  );
};

export default DealTime;
