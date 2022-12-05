import React, { useState } from "react";
import Connections from "../Connections";
import Properties from "../Properties";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { setWildcard, setInbound, setGroupBy, getFilters } from "./schemaSlice";
import {
  selectProperties,
  selectConnections,
  selectType
} from "../../typeSlice";
import { openModal } from "../../../modals/modalsSlice";

const TypeSchema = ({ type }) => {
  const dispatch = useDispatch();

  const { wildcards, inboundConnections, groupBy } = useSelector(getFilters);
  const activeType = useSelector(selectType);
  // const fields = useSelector(selectFields);
  // const schem = useSelector(selectUnmappedSchema);

  const connections = useSelector(selectConnections).filter(d => {
    return inboundConnections || d.direction === "out";
  });
  const properties = useSelector(selectProperties);

  const groupOptions = [
    { label: "None" },
    { label: "ConnectionType" },
    { label: "ElementType" }
  ];

  return (
    <div className="type-schema">
      <Properties
        properties={properties}
        groupConnections={groupBy}
        onAdd={() => {}}
      />
      <div className="section-background spaced-flex small">
        {/* <label>
          <input
            type="checkbox"
            checked={wildcards}
            onChange={event => {
              const target = event.target;
              dispatch(setWildcard(target.checked));
            }}
          />
          Show wildcards
        </label> */}
        <label>
          <input
            type="checkbox"
            checked={inboundConnections}
            onChange={event => {
              const target = event.target;
              dispatch(setInbound(target.checked));
            }}
          />
          Show inbound
        </label>
        <UncontrolledDropdown className="ghost small">
          <DropdownToggle caret>{groupBy}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Group By</DropdownItem>
            {groupOptions.map(d => (
              <DropdownItem
                key={d.label}
                onClick={e => {
                  dispatch(setGroupBy(d.label));
                }}
              >
                {d.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <Connections
        connections={connections}
        properties={properties}
        groupConnections={groupBy}
        onAdd={() => {
          dispatch(
            openModal({
              modalType: "AddConnectionToType",
              modalProps: {
                typeUUID: activeType
              }
            })
          );
        }}
      />
    </div>
  );
};

export default TypeSchema;
