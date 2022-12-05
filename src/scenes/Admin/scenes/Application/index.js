import React from "react";

const items = {
  Manage: ["Tools", "City Users"],
  Personalize: ["Customize"],
  Configure: ["Suggestions", "Views", "Forms", "Settings", "Notifications"]
};

const Application = () => {
  return (
    <>
      <div className="sidebar">
        {Object.keys(items).map(group => (
          <div style={{ paddingBottom: "16px" }}>
            <div style={{ paddingBottom: "6px", fontSize: "12px" }}>
              {group}
            </div>
            {items[group].map(label => (
              <div style={{ paddingBottom: "6px", color: "#6c757c" }}>
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="main" />
    </>
  );
};

export default Application;
