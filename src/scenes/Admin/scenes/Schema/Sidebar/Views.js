import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../../appSlice";
import { selectInfo } from "../typeSlice";
import { setForm } from "../../Form/formSlice";

const Views = () => {
  const { name } = useSelector(selectInfo);
  const dispatch = useDispatch();
  return (
    <div className="type-page">
      <div className="types-list-section">
        <div className="type-header">
          <div className="title">Views</div>
        </div>
        {["Create", "Edit", "View"].map(d => (
          <div
            onClick={() => {
              dispatch(setPage("Form"));
              dispatch(
                setForm({
                  name: d,
                  typeName: name,
                  fields: []
                })
              );
            }}
            className="type-item"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="types-list-section">
        <div className="type-header">
          <div className="title">Actions</div>
        </div>
      </div>
    </div>
  );
};

export default Views;
