import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

const ConnectionQuery = ({ paths }) => {
  return paths.map(path => {
    let Icon =
      path.direction === "in"
        ? faArrowLeft
        : path.direction === "out"
        ? faArrowRight
        : faMinus;
    const connectionLabel = path.connectionTypes
      .map(type => type.name)
      .join(", ");
    return (
      <span className="connection-query-display">
        <FontAwesomeIcon icon={Icon} />
        {connectionLabel}
        {path.elementTypes.map(type => (
          <span className="tag">{type.name}</span>
        ))}
      </span>
    );
  });
};

export default ConnectionQuery;
