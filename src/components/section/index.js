import React from "react";
import styles from "./style.module.css";

const Section = ({ bgColor, p, pt, pb, py, bgImg, children, customCss }) => {
  return (
    <div
      className={`${styles.section} ${styles[bgColor]} ${styles["p-" + p]} ${
        styles["py-" + py]
      } ${styles["pb-" + pb]} ${styles["pt-" + pt]} ${
        bgImg ? styles.bgImage : ""
      } ${customCss}`}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}>
      {children}
    </div>
  );
};

export default Section;
