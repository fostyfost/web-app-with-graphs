import { combineReducers } from "redux";
import typeSlice from "./typeSlice";
import schemaPage from "./Sidebar/Schema/schemaSlice";

export default combineReducers({
  info: typeSlice,
  schema: schemaPage
});
