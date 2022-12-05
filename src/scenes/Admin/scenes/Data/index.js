import React, { useState } from "react";
import TypeList from "../../../../components/TypeList";

import { useSelector } from "react-redux";
import { getSchema } from "../Schema/schemaSlice";

const Data = ({ schema }) => {
  const [type, setType] = useState(false);

  const types = useSelector(getSchema);

  return (
    <>
      <div className="sidebar">
        <TypeList
          name="Element Types"
          onAdd={() => {}}
          selected={type}
          types={types.elements}
          onClick={uuid => {
            setType(uuid);
          }}
        />
        <TypeList
          name="Connection Types"
          selected={type}
          types={types.connections}
          onClick={uuid => {
            setType(uuid);
          }}
          onAdd={() => {}}
        />
      </div>
      <div className="main">
        Table Here
        <table />
      </div>
    </>
  );
};

export default Data;
