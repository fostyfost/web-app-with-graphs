import React from "react";
import { Button } from "reactstrap";
import Multiselect from "./Multiselect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const ConnectionRow = ({
  types,
  path,
  updatePath,
  onDelete,
  showSourceTypes
}) => {
  const {
    sourceTypes = [],
    targetTypes = [],
    connectionTypes = [],
    direction = "out"
  } = path;

  return (
    <div className="connection-row">
      {showSourceTypes && (
        <Multiselect
          options={types.elements}
          value={sourceTypes}
          placeholder="Element(s)"
          onUpdate={data => {
            updatePath({ ...path, sourceTypes: data });
          }}
        />
      )}
      <Button className="light" onClick={() => {}}>
        <FontAwesomeIcon
          icon={direction === "out" ? faArrowRight : faArrowLeft}
        />
      </Button>
      <Multiselect
        options={types.connections}
        value={connectionTypes}
        placeholder="Connection(s)"
        onUpdate={data => {
          updatePath({ ...path, connectionTypes: data });
        }}
      />
      <Multiselect
        options={types.elements}
        value={targetTypes}
        placeholder="Element(s)"
        onUpdate={data => {
          updatePath({ ...path, targetTypes: data });
        }}
      />
      {!!onDelete && (
        <Button className="ghost" onClick={onDelete}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      )}
    </div>
  );
};

const defPath = { direction: "out", targetTypes: [], connectionTypes: [] };
const ConnectionBuilder = ({
  types,
  paths = [defPath],
  onChange,
  showSourceTypes = false
}) => {
  function addPath() {
    onChange([...paths, defPath]);
  }
  debugger;

  return (
    <div>
      {paths.map((path, i) => (
        <ConnectionRow
          key={i}
          types={types}
          path={path}
          showSourceTypes={showSourceTypes}
          updatePath={newPath => {
            onChange([...paths.slice(0, i), newPath, ...paths.slice(i + 1)]);
          }}
          onDelete={
            i === 0
              ? null
              : () => {
                  onChange([...paths.slice(0, i), ...paths.slice(i + 1)]);
                }
          }
        />
      ))}
      <Button className="ghost" onClick={addPath}>
        Add Path
      </Button>
    </div>
  );
};

export default ConnectionBuilder;
