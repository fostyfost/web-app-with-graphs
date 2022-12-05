import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../modalsSlice";
import { createField, updateField } from "../../Schema/typeSlice";
import { getSchema } from "../../Schema/schemaSlice";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { set } from "lodash";
import CreateField from "./CreateField";
import schema from "../../../../../api";

const Field = ({ typeUUID, data }) => {
  const dispatch = useDispatch();
  const types = useSelector(getSchema);
  const [formValue, setFormValue] = useState({
    name: "",
    id: "",
    type: "",
    options: {},
    ...data
  });
  const [field, setField] = useState(false);
  const isExistingField = !!(data && data.uuid);

  const onSubmit = data => {
    const submitFunc = !!field ? updateField : createField;
    dispatch(submitFunc({ typeUUID, uuid: data.uuid, data }));
    dispatch(closeModal());
  };

  useEffect(() => {
    if (isExistingField) {
      const field = schema.type_getField(typeUUID, data.uuid);
      setField(field);
    }
  }, [data]);

  const updateValues = data => {
    const newFormValue = { ...formValue };
    Object.keys(data).forEach(prop => {
      set(newFormValue, prop, data[prop]);
    });
    setFormValue(newFormValue);
  };

  let label = isExistingField
    ? "Edit Field"
    : formValue.type
    ? `New ${formValue.type} field`
    : "Add new field";
  return (
    <Modal isOpen={true} toggle={() => dispatch(closeModal())}>
      <ModalHeader>{label}</ModalHeader>
      <ModalBody>
        <CreateField
          field={field}
          types={types}
          formValue={formValue}
          updateValues={updateValues}
          onSubmit={onSubmit}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          className="light"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </Button>{" "}
        <Button
          color="primary"
          onClick={() => {
            onSubmit(formValue);
          }}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Field;
