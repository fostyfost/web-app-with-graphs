import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DraggableList = ({ items, onUpdate, itemRenderer }) => {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const _items = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    onUpdate(_items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List items={items} itemRenderer={itemRenderer} />
    </DragDropContext>
  );
};

export default DraggableList;
