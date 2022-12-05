import React from "react";
import { useSelector } from "react-redux";
import { selectModals } from "./modalsSlice";

import AddType from "./AddType";
import AddField from "./AddField";
import AddConnection from "./AddConnection";
import AddConnectionToType from "./AddConnectionToType";

const modalComponentLookupTable = {
  AddType,
  AddField,
  AddConnection,
  AddConnectionToType
};

const ModalManager = () => {
  const currentModal = useSelector(selectModals);
  console.log("MODAL::", currentModal);

  let renderedModal;
  if (currentModal.open) {
    const { modalType, modalProps = {} } = currentModal;
    const ModalComponent = modalComponentLookupTable[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
