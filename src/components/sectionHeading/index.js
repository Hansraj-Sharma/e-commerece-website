import React from "react";
import styles from "./style.module.css";

const SectionHeading = ({ title1, title2, justify = "center" }) => {
  return (
    <div className={`${styles.heading} ${styles[justify]}`}>
      <span className={styles.heading1}>{title1}</span>
      <span className={styles.heading2}> {title2}</span>
    </div>
  );
};

export default SectionHeading;
