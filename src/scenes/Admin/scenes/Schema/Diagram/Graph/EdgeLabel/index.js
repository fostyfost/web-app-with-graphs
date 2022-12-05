import React from "react";
import styles from "./styles.module.scss";
import useResizeObserver from "use-resize-observer";

const EdgeLabel = ({
  edge = {},
  scale = 1,
  state,
  onChange = () => {},
  onMouseOver = () => {},
  onMouseOut = () => {},
  onClick = () => {},
  x = 0,
  y = 0
}) => {
  const { ref } = useResizeObserver({
    onResize: ({ width, height }) => {
      onChange({
        size: { width, height }
      });
    }
  });

  const _className = `${styles.root} ${state ? styles[state] : ""}`;

  return (
    <div style={{ left: x, top: y }} className={_className}>
      <div
        ref={ref}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        className={styles.container}
      >
        {edge.label}
      </div>
    </div>
  );
};

export default EdgeLabel;
