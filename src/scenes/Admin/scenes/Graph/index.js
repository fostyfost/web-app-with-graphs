import React from "react";

const Application = ({ schema }) => {
  return (
    <>
      <div className="sidebar">Saved patterns here</div>
      <div className="main">
        <div style={{ width: "100%" }}>
          <div
            style={{
              background: "#fafbfa",
              height: "200px",
              width: "100%",
              borderBottom: "1px solid #eee",
              padding: "20px",
              marginBottom: "20px"
            }}
          >
            Pattern builder here
          </div>
          <div>Network Diagram here</div>
        </div>
      </div>
    </>
  );
};

export default Application;
