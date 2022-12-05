import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Node = ({
  scale = 1,
  node,
  getGraph,
  state,
  isDragging,
  className = ""
}) => {
  const _className = `${styles.root} ${isDragging ? styles.dragging : ""} ${
    state ? styles[state] : ""
  } ${className ? className : ""}`;
  const { label, icon, color } = node;

  return (
    <div className={_className}>
      <div className={styles.container} style={{ background: color }}>
        <div className={styles.iconContainer}>
          {!!icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
        </div>
        {!!label && <div className={styles.label}>{label}</div>}
      </div>
    </div>
  );
};

export default Node;
