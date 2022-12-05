import React from "react";
import Connections from "./Connections";
import Properties from "./Properties";
import DraggableList from "../../../../../components/DraggableList";
import TagList from "../../../../../components/TagList";
import ConnectionQuery from "../../../../../components/ConnectionQuery";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import capitalize from "capitalize";
import { cloneDeep } from "lodash";

import { useSelector, useDispatch } from "react-redux";
import {
  selectFields,
  selectUnmappedSchema,
  setFields,
  updateField,
  removeField,
  selectType
} from "../typeSlice";
import { openModal } from "../../modals/modalsSlice";

const getTags = d => {
  const tags = [];
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

const Fields = () => {
  const dispatch = useDispatch();
  const fields = useSelector(selectFields);
  const schem = useSelector(selectUnmappedSchema);
  const activeType = useSelector(selectType);

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
    dispatch(setFields(fields));
  };

  const _fields = (
    <DraggableList
      items={fields}
      itemRenderer={({ data }) => {
        return (
          <div className="fieldBlocks">
            <div className="fieldHeader">
              <div>
                <div className="fieldLabel">
                  <span>{data.name}</span>
                  <span className="subtitle"> ({data.inputType})</span>
                </div>
                <div className="subtitle">
                  {data.query.type === "connection" ? (
                    <ConnectionQuery paths={data.query.connection} />
                  ) : (
                    data.subtitle
                  )}
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
      }}
      onUpdate={onUpdate}
    />
  );

  return (
    <div className="type-schema">
      <div className="types-list-section">
        <div className="type-header">
          <div className="title">Fields</div>
          <Button
            onClick={() => {
              onAdd();
            }}
            className="type-button light xsmall"
          >
            Add
          </Button>
        </div>
        {_fields}
      </div>
      <hr />
      {!!(
        (schem.properties && schem.properties.length) ||
        (schem.connections && schem.connections.length)
      ) && (
        <>
          <div className="type-header">
            <div className="title">Hidden Data</div>
          </div>
          <div className="subtitle">
            These items don't have a field configured and won't be displayed in
            forms or pages. (Click one to configure a new field.)
          </div>
          <div className="types-list-section section-background">
            <div>
              <Properties
                minimal={true}
                properties={schem.properties}
                onClick={data => {
                  onAdd({
                    name: capitalize.words(data.name),
                    type: data.type,
                    required: data.required,
                    query: {
                      type: "property",
                      property: data.name
                    }
                  });
                }}
              />
              <Connections
                connections={schem.connections}
                groupConnections={"ConnectionType"}
                onClick={data => {
                  onAdd({
                    name: capitalize.words(data.name),
                    type: "connection",
                    query: data.query,
                    multiple: true,
                    inputType: "autocomplete"
                  });
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Fields;
