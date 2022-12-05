import React from "react";

const Info = () => {
  return (
    <div className="type-page">
      <div>
        <h5 className="schema-section-title">General Info</h5>
        <div>Display Name</div>
        <div>Plural Name</div>
        <div>Description</div>
        <div>Color</div>
        <div>Icon</div>
      </div>
      <hr />
      <div>
        <h5 className="schema-section-title">Appearance Options</h5>
        <div>Label</div>
        <div>Description</div>
        <div>Avatar</div>
      </div>
      <hr />
      <div>
        <h5 className="schema-section-title">Form Behavior Options</h5>
        <div>Show Form on create</div>
      </div>
      <hr />
      <div>
        <h5 className="schema-section-title">Search Options</h5>
        <div>Show in global search</div>
        <div>Connections to include</div>
      </div>
      <hr />
      <div>
        <h5 className="schema-section-title">Filter Options</h5>
        <div>Show as a filter</div>
        <div>Filter appearance</div>
      </div>
      <hr />
      <div>
        <h5 className="schema-section-title">Privacy</h5>
      </div>
    </div>
  );
};

export default Info;
