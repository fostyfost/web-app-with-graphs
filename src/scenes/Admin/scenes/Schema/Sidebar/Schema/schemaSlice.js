import { createSlice } from "@reduxjs/toolkit";

const schemaSlice = createSlice({
  name: "schema",
  initialState: {
    wildcards: false,
    inboundConnections: true,
    groupBy: "ConnectionType"
  },
  reducers: {
    setWildcard(state, action) {
      state.wildcards = action.payload;
    },
    setInbound(state, action) {
      state.inboundConnections = action.payload;
    },
    setGroupBy(state, action) {
      state.groupBy = action.payload;
    }
  }
});

export const { setWildcard, setInbound, setGroupBy } = schemaSlice.actions;
export const getFilters = state => state.type.schema;

export default schemaSlice.reducer;
