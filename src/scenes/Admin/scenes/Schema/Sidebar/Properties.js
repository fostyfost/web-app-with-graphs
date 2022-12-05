import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import TagList from "../../../../../components/TagList";

const getTags = d => {
  const tags = [];
  if (d.type) {
    tags.push(d.type);
  }
  if (d.required) {
    tags.push("required");
  }
  if (d.unique) {
    tags.push("unique");
  }
  if (d.isLabel) {
    tags.push("label");
  }
  return tags;
};

const PropertyItem = ({ type, onClick, minimal }) => (
  <div
    onClick={() => {
      onClick(type);
    }}
  >
    <div className={`type-item`}>
      <div>
        {minimal ? (
          <div>{`${type.name} (${type.type})`}</div>
        ) : (
          <>
            <div>{type.name}</div>
            <div className="subtitle">
              <TagList tags={getTags(type)} />
            </div>
          </>
        )}
      </div>
      {!minimal && (
        <UncontrolledDropdown className="ghost small">
          <DropdownToggle>
            <FontAwesomeIcon icon={faEllipsisH} />
          </DropdownToggle>
          <DropdownMenu>
            {[
              { label: "edit" },
              { label: "set as unique" },
              { label: "set as required" },
              { label: "set as label" },
              { label: "delete" }
            ].map(d => (
              <DropdownItem key={d.label} onClick={e => {}}>
                {d.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </div>
  </div>
);

const TypeSchema = ({
  connections,
  properties,
  groupConnections = "ConnectionType",
  onAdd,
  onClick = d => {
    console.log("d", d);
  },
  minimal = false
}) => {
  return (
    <div className="type-schema">
      {!!(properties && properties.length) && (
        <div className="types-list-section">
          <div className="type-header title">Properties</div>
          {properties.map(d => (
            <PropertyItem onClick={onClick} type={d} minimal={minimal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeSchema;
