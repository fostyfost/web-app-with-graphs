import React, { useState } from "react";
import { ButtonGroup, Button } from "reactstrap";

const Buttons = ({ buttons = [], onClick = () => {}, className = "" }) => {
  return (
    <ButtonGroup className={`button-group ${className}`}>
      {buttons.map(d => (
        <Button
          onClick={() => {
            onClick(d);
          }}
          className={`${d.active ? "active" : ""}`}
        >
          {d.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Buttons;
