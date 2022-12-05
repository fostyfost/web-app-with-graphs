import React, { useState } from "react";
import Diagram from "./Diagram";
import TypeList from "../../../../components/TypeList";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import { useSelector, useDispatch } from "react-redux";
import { getSchema } from "./schemaSlice";
import { selectType, setActiveType } from "./typeSlice";
import { openModal } from "../modals/modalsSlice";

const Schema = () => {
  const dispatch = useDispatch();
  const activeType = useSelector(selectType);
  const types = useSelector(getSchema);

  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  console.log("STATE::", useSelector(state => state));
  const elementTypes = types.elements.filter(
    d => !search || d.name.toLowerCase().includes(search.toLowerCase())
  );
  const connectionTypes = types.connections.filter(
    d => !search || d.name.toLowerCase().includes(search.toLowerCase())
  );
  const content = (
    <div className="search-results">
      <TypeList
        name="Element Types"
        onAdd={() => {
          setVisible(false);
          dispatch(
            openModal({
              modalType: "AddType",
              modalProps: {
                type: "element"
              }
            })
          );
        }}
        selected={activeType}
        types={elementTypes}
        onClick={uuid => {
          setVisible(false);
          dispatch(setActiveType({ uuid }));
        }}
      />
      <TypeList
        name="Connection Types"
        selected={activeType}
        types={connectionTypes}
        onClick={uuid => {
          setVisible(false);
          dispatch(setActiveType({ uuid }));
        }}
        onAdd={() => {
          setVisible(false);
          dispatch(
            openModal({
              modalType: "AddType",
              modalProps: {
                type: "connection"
              }
            })
          );
        }}
      />
    </div>
  );

  return (
    <>
      <div className="main">
        <div className="search-container">
          <Tippy
            arrow={false}
            placement="bottom"
            theme="light"
            interactive={true}
            visible={visible}
            onClickOutside={() => setVisible(false)}
            content={content}
            distance={10}
          >
            <input
              className="search-input"
              placeHolder="Search"
              value={search}
              onFocus={() => {
                setVisible(true);
              }}
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </Tippy>
        </div>

        <Diagram schema={types} />
      </div>
    </>
  );
};

export default Schema;
