import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalsSlice";
import { createConnection, getSchema } from "../Schema/schemaSlice";
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

const AddConnection = ({ source, target }) => {
  const dispatch = useDispatch();
  const types = useSelector(getSchema);

  const [formValue, setFormValue] = useState({
    ...{
      query: [
        {
          sourceTypes: [{ uuid: source, name: source }],
          direction: "out",
          targetTypes: [{ uuid: target, name: target }],
          connectionTypes: []
        }
      ]
    }
  });
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
              showSourceTypes={true}
              types={types}
              paths={query}
              onChange={query => {
                updateValues({ query });
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
            dispatch(createConnection(formValue));
            dispatch(closeModal());
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddConnection;
