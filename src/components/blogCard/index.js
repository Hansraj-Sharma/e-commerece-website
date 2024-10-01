import React from "react";
import styles from "./style.module.css";

const BlogCard = ({ imgUrl, title, date, pb, border, pt }) => {
  return (
    <div
      className={`${styles.blog_card} ${styles["pb-" + pb]}  ${
        styles["pt-" + pt]
      } ${styles[border]}`}>
      <div className={styles.bc_img}>
        <img src={imgUrl} alt='child img' />
      </div>
      <div className={styles.bc_content}>
        <div className={styles.bc_title}>{title}</div>
        <div className={styles.bc_expire_date}>{date}</div>
      </div>
    </div>
  );
};

export default BlogCard;
