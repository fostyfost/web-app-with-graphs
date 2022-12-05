import React from "react";
import styles from "./styles.module.scss";

const TagList = ({ tags = [], onClick = () => {} }) => {
  return (
    <div className={styles.tagList}>
      {tags.map(d => (
        <div class={styles.tag}>{d}</div>
      ))}
    </div>
  );
};

export default TagList;
