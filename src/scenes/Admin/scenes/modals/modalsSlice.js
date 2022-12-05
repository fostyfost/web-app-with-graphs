import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    modalType: null,
    modalProps: {}
  },
  reducers: {
    openModal: (state, action) => {
      const { modalType, modalProps } = action.payload;
      state.open = true;
      state.modalType = modalType;
      state.modalProps = modalProps;
    },
    closeModal: state => {
      state.open = false;
      state.modalType = null;
      state.modalProps = null;
    }
  }
});

export const { openModal, closeModal } = modalsSlice.actions;

export const selectModals = state => state.modals;

export default modalsSlice.reducer;
