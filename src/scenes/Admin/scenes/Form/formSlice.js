import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    type: false,
    typeName: false,
    name: "",
    fields: []
  },
  reducers: {
    setForm(state, action) {
      const { typeName, name, fields } = action.payload;
      // state.type = action.type;
      state.typeName = typeName;
      state.name = name;
      state.fields = fields;
    },
    setFields(state, action) {
      state.fields = action.payload;
    },
    hideField(state, action) {
      const { uuid } = action.payload;
      state.fields = state.fields.filter(d => d.uuid !== uuid);
    }
  }
});

export const { setForm, setFields, hideField } = formSlice.actions;
export const getForm = state => state.form;

export default formSlice.reducer;
