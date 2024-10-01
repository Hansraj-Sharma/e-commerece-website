import React from "react";
import styles from "./style.module.css";

const MilestoneBox = ({ imgUrl, work, time }) => {
  return (
    <div className={styles.milestoneBox}>
      <div className={styles.child_img}>
        <img src={imgUrl} alt='baby img' />
      </div>
      <div className={styles.child_info}>
        <div className={styles.ci_work}>{work}</div>
        <div className={styles.ci_time}>{time}</div>
      </div>
    </div>
  );
};

export default MilestoneBox;
