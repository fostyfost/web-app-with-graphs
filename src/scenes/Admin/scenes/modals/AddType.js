import React, { useState } from "react";
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import { useDispatch } from "react-redux";
import { closeModal } from "./modalsSlice";
import { createElementType, createConnectionType } from "../Schema/schemaSlice";

const TypeList = ({ type }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <Modal isOpen={true} toggle={() => dispatch(closeModal())}>
      <ModalHeader>
        {type === "element" ? "Add ElementType" : "Add ConnectionType"}
      </ModalHeader>
      <ModalBody>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => {
            debugger;
            dispatch(closeModal());
          }}
        >
          Cancel
        </Button>{" "}
        <Button
          color="primary"
          onClick={() => {
            const submitFunc =
              type === "element" ? createElementType : createConnectionType;
            dispatch(submitFunc({ name }));
            dispatch(closeModal());
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TypeList;
