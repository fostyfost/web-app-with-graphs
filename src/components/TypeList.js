import React from "react";
import { orderBy } from "lodash";
import { Button } from "reactstrap";

const Item = ({ type, onClick, selected }) => (
  <div
    onClick={() => {
      onClick(type.uuid);
    }}
    className={`type-item ${selected ? "selected" : ""}`}
  >
    <div>{type.name}</div>
  </div>
);

const TypeList = ({
  name = "",
  types,
  selected = "",
  onClick = () => {},
  onAdd
}) => {
  const items = orderBy(types, [d => d.name.toLowerCase()]);

  return (
    <div className="types-list">
      <div className="types-list-section">
        <div className="type-header">
          <div className="title">{name}</div>
          {!!onAdd && (
            <Button onClick={onAdd} className="type-button light xsmall">
              Add
            </Button>
          )}
        </div>

        {items.map(d => (
          <Item
            key={d.uuid}
            type={d}
            selected={d.uuid === selected}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeList;
