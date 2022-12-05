import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const Field = ({ data, index }) => {
  return (
    <div>
      <div>{data.name}</div>
    </div>
  );
};

const Block = ({ data, index, renderer }) => {
  const Component = renderer || Field;
  return (
    <Draggable draggableId={data.uuid} index={index}>
      {(provided, snapshot) => (
        <div
          className={`
            ${styles.block} 
            ${
              snapshot.isDragging && !snapshot.isDropAnimating
                ? styles.dragging
                : ""
            }
          `}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className={styles.handle} {...provided.dragHandleProps}>
            <FontAwesomeIcon
              className={styles.handleIcon}
              icon={faGripVertical}
            />
          </div>
          <div className={styles.content}>
            <Component key={data.uuid} data={data} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Block;
