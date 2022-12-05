import React, { useState } from "react";
import Connections from "../Connections";
import Properties from "../Properties";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import DraggableList from "../../../../../../components/DraggableList";
import TagList from "../../../../../../components/TagList";
import ConnectionQuery from "../../../../../../components/ConnectionQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { cloneDeep } from "lodash";

import { useSelector, useDispatch } from "react-redux";
import { setWildcard, setInbound, setGroupBy, getFilters } from "./schemaSlice";
import {
  selectProperties,
  selectConnections,
  selectType,
  selectFields,
  selectUnmappedSchema,
  setFields,
  updateField,
  removeField
} from "../../typeSlice";
import { openModal } from "../../../modals/modalsSlice";
import styles from "./styles.module.scss";

const getTags = d => {
  const tags = [];
  if (d.inputType) {
    tags.push(d.inputType);
  }
  if (d.required) {
    tags.push("required");
  }
  if (d.unique) {
    tags.push("unique");
  }
  if (d.hide) {
    tags.push("hidden");
  }
  return tags;
};

const groupOptions = [
  { label: "None" },
  { label: "ConnectionType" },
  { label: "ElementType" }
];

const TypeSchema = ({ type }) => {
  const dispatch = useDispatch();

  const { wildcards, inboundConnections, groupBy } = useSelector(getFilters);
  const activeType = useSelector(selectType);
  const fields = useSelector(selectFields);
  // const schem = useSelector(selectUnmappedSchema);

  const connections = useSelector(selectConnections).filter(d => {
    return inboundConnections || d.direction === "out";
  });
  const properties = useSelector(selectProperties);

  const propertyFields = fields.filter(d => d.query.type === "property");
  const connectionFields = fields.filter(d => d.query.type === "connection");

  const fieldProp = {
    uuid: "",
    name: "",
    property: "",

    // constraints
    required: false,
    unique: false,

    // appearance
    inputType: "textbox",
    hide: false
  };

  const getFieldActions = data => [
    {
      label: "edit",
      action: data => {
        onEdit(data);
      }
    },
    {
      label: data.required ? "set as optional" : "set as required",
      action: data => {
        dispatch(
          updateField({
            typeUUID: activeType,
            uuid: data.uuid,
            data: { required: !data.required }
          })
        );
      }
    },
    {
      label: data.hide ? "show" : "hide",
      action: data => {
        dispatch(
          updateField({
            typeUUID: activeType,
            uuid: data.uuid,
            data: {
              uuid: data.uuid,
              data: { hide: !data.hide }
            }
          })
        );
      }
    },
    {
      label: "delete",
      action: data => {
        dispatch(
          removeField({
            typeUUID: activeType,
            uuid: data.uuid
          })
        );
      }
    }
  ];

  const getPropertyField = data => (
    <div className="fieldBlocks">
      <div className="fieldHeader">
        <div>
          <div className="fieldLabel">
            <span>{data.name}</span>
            <span className="subtitle">{` #${data.query.property}`}</span>
          </div>
          <TagList tags={getTags(data)} />
        </div>
        <UncontrolledDropdown className="ghost small">
          <DropdownToggle>
            <FontAwesomeIcon icon={faEllipsisV} />
          </DropdownToggle>
          <DropdownMenu>
            {getFieldActions(data).map(d => (
              <DropdownItem
                key={d.label}
                onClick={e => {
                  if (d.action) {
                    d.action(data);
                  }
                }}
              >
                {d.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );

  const getConnectionField = data => (
    <div className="fieldBlocks">
      <div className="fieldHeader">
        <div>
          <div className="fieldLabel">
            <span>{data.name}</span>
          </div>
          <div className="subtitle">
            <ConnectionQuery paths={data.query.connection} />
          </div>
          <TagList tags={getTags(data)} />
        </div>
        <UncontrolledDropdown className="ghost small">
          <DropdownToggle>
            <FontAwesomeIcon icon={faEllipsisV} />
          </DropdownToggle>
          <DropdownMenu>
            {getFieldActions(data).map(d => (
              <DropdownItem
                key={d.label}
                onClick={e => {
                  if (d.action) {
                    d.action(data);
                  }
                }}
              >
                {d.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );

  const onAdd = data => {
    dispatch(
      openModal({
        modalType: "AddField",
        modalProps: {
          typeUUID: activeType,
          data
        }
      })
    );
  };
  const onEdit = field => {
    dispatch(
      openModal({
        modalType: "AddField",
        modalProps: {
          typeUUID: activeType,
          data: cloneDeep(field)
        }
      })
    );
  };
  const onUpdate = fields => {
    // dispatch(setFields(fields));
  };

  const _fields = (
    <DraggableList
      items={propertyFields}
      itemRenderer={({ data }) => getPropertyField(data)}
      onUpdate={onUpdate}
    />
  );

  const _connFields = (
    <DraggableList
      items={connectionFields}
      itemRenderer={({ data }) => getConnectionField(data)}
      onUpdate={onUpdate}
    />
  );

  const connFilters = (
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
  );

  return (
    <div className="type-schema">
      <div className="types-list-section">
        <div className="type-header title">Properties</div>
        {_fields}
      </div>
      <div className="types-list-section">
        <div className="type-header title">Connections</div>
        {connFilters}
        {_connFields}
      </div>
      {/* <Properties
        properties={properties}
        onAdd={() => {}}
      /> */}
      {/* <Connections
        connections={connections}
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
      /> */}
    </div>
  );
};

export default TypeSchema;
