import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./scenes/Admin/appSlice";
import schemaReducer from "./scenes/Admin/scenes/Schema/schemaSlice";
import typeReducer from "./scenes/Admin/scenes/Schema/slice";
import modalsReducer from "./scenes/Admin/scenes/modals/modalsSlice";
import formReducer from "./scenes/Admin/scenes/Form/formSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    schema: schemaReducer,
    type: typeReducer,
    form: formReducer,
    modals: modalsReducer
  }
});
