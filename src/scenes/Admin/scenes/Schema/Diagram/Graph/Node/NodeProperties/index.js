import React from "react";
import styles from "./styles.module.scss";

const Node = ({ scale = 1, node, selected, isDragging, className = "" }) => {
  const _className = `${styles.root} ${isDragging ? styles.dragging : ""} ${
    selected ? styles.selected : ""
  } ${className ? className : ""}`;
  const { label, color, properties } = node;

  return (
    <div className={_className}>
      <div
        className={styles.container}
        style={{ borderTop: `4px solid ${color}` }}
      >
        {!!label && <div className={styles.label}>{label}</div>}
        <div className={styles.properties}>
          {Object.keys(properties).map(prop => (
            <div className={styles.property}>{prop}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Node;
