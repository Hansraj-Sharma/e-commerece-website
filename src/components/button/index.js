import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({
  text,
  to,
  size,
  bg,
  color,
  display,
  align,
  customCss,
  type,
  isButton,
  onClick,
  transform,
  showArrow = false,
}) => {
  const commonClasses = `${styles.button} ${styles[size]}  ${
    styles[transform]
  } ${styles[type]} ${styles[bg]} ${styles[color]} ${styles[display]} ${
    styles["align" + align]
  } ${customCss}`;
  return isButton ? (
    <button className={commonClasses} onClick={onClick}>
      {text}
    </button>
  ) : (
    <Link to={to} className={commonClasses} onClick={onClick}>
      {text}
      {showArrow && <span className={styles.arrow}></span>}
    </Link>
  );
};

export default Button;
