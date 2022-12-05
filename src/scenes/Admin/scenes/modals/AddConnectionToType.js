import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalsSlice";
import { getSchema } from "../Schema/schemaSlice";
import { createConnection } from "../Schema/typeSlice";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  FormGroup
} from "reactstrap";
import ConnectionBuilder from "../../../../components/ConnectionBuilder";

const AddConnectionToType = ({ typeUUID, data = {} }) => {
  const dispatch = useDispatch();
  const types = useSelector(getSchema);
  const [formValue, setFormValue] = useState({ ...data });
  const { query } = formValue;
  const updateValues = data => {
    setFormValue({ ...formValue, ...data });
  };

  return (
    <Modal isOpen={true} toggle={() => dispatch(closeModal())}>
      <ModalHeader>Create Connection</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Query</Label>
            <ConnectionBuilder
              types={types}
              paths={
                query &&
                query.map(q => ({
                  targetTypes: q.elementTypes,
                  direction: q.direction,
                  connectionTypes: q.connectionTypes
                }))
              }
              onChange={query => {
                updateValues({
                  query: query.map(q => ({
                    elementTypes: q.targetTypes,
                    direction: q.direction,
                    connectionTypes: q.connectionTypes
                  }))
                });
              }}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => dispatch(closeModal())}>
          Cancel
        </Button>{" "}
        <Button
          color="primary"
          onClick={() => {
            dispatch(createConnection(typeUUID, formValue));
            dispatch(closeModal());
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddConnectionToType;
