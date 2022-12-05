import React from "react";
import { groupBy, uniqBy } from "lodash";
import { Button } from "reactstrap";
import ConnectionQuery from "../../../../../components/ConnectionQuery";

const ConnectionItem = ({ type, onClick }) => {
  const connectionQuery = [
    {
      direction: type.direction,
      elementTypes: [type.target],
      connectionTypes: [type.type]
    }
  ];
  return (
    <div
      onClick={() => {
        onClick({
          name: `${type.name} ${type.target.name}`,
          type: "connection",
          query: {
            connection: connectionQuery
          }
        });
      }}
      className={`type-item`}
    >
      <ConnectionQuery paths={connectionQuery} />
    </div>
  );
};

const renderGroupedInput = (connections, group, onClick) => {
  const isConnectionType = group === "ConnectionType";
  const selector = isConnectionType ? "type.name" : "target.name";
  const grouped = groupBy(connections, selector);

  function getQuery(paths, dir) {
    return [
      {
        direction: dir,
        elementTypes: (isConnectionType ? paths : [paths[0]]).map(
          type => type.target
        ),
        connectionTypes: (isConnectionType ? [paths[0]] : paths).map(
          type => type.type
        )
      }
    ];
  }

  return Object.keys(grouped).map(group => {
    const directions = groupBy(grouped[group], "direction");
    return Object.keys(directions).map(dir => {
      return (
        <>
          <div
            onClick={() => {
              onClick({
                name: group,
                type: "connection",
                query: {
                  type: "connection",
                  connection: [
                    {
                      direction: dir,
                      elementTypes: uniqBy(
                        directions[dir].map(d => d.target),
                        "uuid"
                      ),
                      connectionTypes: uniqBy(
                        directions[dir].map(d => d.type),
                        "uuid"
                      )
                    }
                  ]
                }
              });
            }}
            className="group"
          >
            <div className="group-title">
              <div>{group}</div>
              <div className="subtitle">
                <ConnectionQuery paths={getQuery(directions[dir], dir)} />
              </div>
            </div>
          </div>
        </>
      );
    });
  });
};

const renderFlat = (connections, group, onClick) => {
  return connections.map(d => <ConnectionItem onClick={onClick} type={d} />);
};

const TypeSchema = ({
  connections,
  properties,
  groupConnections = "ConnectionType",
  onAdd,
  onClick = d => {}
}) => {
  return (
    <div className="type-schema">
      <div className="types-list-section">
        <div className="type-header">
          <div className="title">Connections</div>
          {!!onAdd && (
            <Button onClick={onAdd} className="type-button light xsmall">
              Add
            </Button>
          )}
        </div>
        {(groupConnections === "None" ? renderFlat : renderGroupedInput)(
          connections,
          groupConnections,
          onClick
        )}
      </div>
    </div>
  );
};

export default TypeSchema;
