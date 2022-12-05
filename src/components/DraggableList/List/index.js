import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styles from "./styles.module.scss";
import Block from "./Block";

const List = ({ items = [], itemRenderer }) => {
  return (
    <div className={styles.container}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Block
                key={item.uuid}
                data={item}
                index={index}
                renderer={itemRenderer}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default List;
