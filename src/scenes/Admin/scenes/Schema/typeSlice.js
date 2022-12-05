import { createSlice } from "@reduxjs/toolkit";
import api from "../../../../api";
import { refreshAll } from "./schemaSlice";

export const typeSlice = createSlice({
  name: "info",
  initialState: {
    activeType: false,
    name: "",
    type: "",
    extraData: {},
    fields: [],
    unmappedSchema: {},
    properties: {},
    connections: [],
    views: [],
    actions: [],
    settings: {}
  },
  reducers: {
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    setType: (state, action) => {
      state.activeType = action.payload;
    },
    setTypeInfo: (state, action) => {
      const {
        name,
        extraData,
        fields,
        unmappedSchema,
        connections,
        properties,
        type
      } = action.payload;

      state.name = name;
      state.type = type;
      state.extraData = extraData;
      state.fields = fields;
      state.connections = connections;
      state.properties = properties;
      state.unmappedSchema = unmappedSchema;
    }
  }
});

export default typeSlice.reducer;

export const { setType, setTypeInfo, setFields } = typeSlice.actions;

export const selectType = state => state.type.info.activeType;
export const selectInfo = state => ({
  uuid: state.type.info.activeType,
  name: state.type.info.name,
  type: state.type.info.type,
  extraData: state.type.info.extraData
});
export const selectElements = state => state.type.info.elements;
export const selectConnections = state => state.type.info.connections;
export const selectFields = state => state.type.info.fields;
export const selectProperties = state => state.type.info.properties;
export const selectUnmappedSchema = state => state.type.info.unmappedSchema;

export const createConnection = (typeUUID, data) => async dispatch => {
  const { query } = data;
  await dispatch(createFromPathQuery(typeUUID, query));
  dispatch(refreshType());
};

export const createField = ({ typeUUID, data }) => async dispatch => {
  let field = data;

  // make sure schema exists for the field
  if (field.type === "connection") {
    field.query.connection = await dispatch(
      createFromPathQuery(typeUUID, field.query.connection)
    );
  } else {
    api.type_addProperty(typeUUID, {
      name: field.query.property,
      type: field.type
    });
  }

  api.type_createField(typeUUID, { ...field });
  dispatch(refreshType());
};

export const updateField = ({ typeUUID, uuid, data }) => dispatch => {
  // const { uuid } = data;
  const field = api.type_getField(typeUUID, uuid);
  if (
    (data.hasOwnProperty("required") || data.hasOwnProperty("unique")) &&
    field.query.type === "property"
  ) {
    api.type_updateProperty(typeUUID, field.query.property, data);
  }
  api.type_updateField(typeUUID, uuid, data);
  dispatch(refreshType());
};

export const removeField = data => dispatch => {
  const { typeUUID, uuid } = data;
  api.type_removeField(typeUUID, uuid);
  dispatch(refreshType());
};

export const setActiveType = data => dispatch => {
  if (!data) {
    dispatch(setType(false));
  } else {
    dispatch(setType(data.uuid));
    dispatch(refreshType());
  }
};

export const refreshType = data => (dispatch, getState) => {
  const uuid = getState().type.info.activeType;
  if (!uuid) return;

  const info = api.getType(uuid);
  const isElementType = !info.srcDstTypes;

  dispatch(
    setTypeInfo({
      ...info,
      fields: api.type_getFields(uuid),
      type: isElementType ? "element" : "connection",
      properties: api.type_getProperties(uuid),
      connections: isElementType
        ? api.type_getConnections(uuid, {
            includeWildcards: false,
            includeInbound: true
          })
        : [],
      unmappedSchema: api.type_getUnmappedSchema(uuid)
    })
  );
};

// create types and constraints from path query
// should use the version of this function in schemaSlice
export const createFromPathQuery = (uuid, query) => async dispatch => {
  const type = await api.getType(uuid);
  const results = await Promise.all(
    query.map(async path => {
      const elementTypes = await Promise.all(
        path.elementTypes.map(async d => {
          if (d.created) {
            const newType = api.createElementType({ name: d.name });
            return newType;
          }
          return api.getElementType(d.uuid);
        })
      );
      const connectionTypes = await Promise.all(
        path.connectionTypes.map(async d => {
          if (d.created) {
            return api.createConnectionType({ name: d.name });
          }
          return api.getConnectionType(d.uuid);
        })
      );

      // update connectionTypes
      await Promise.all(
        connectionTypes.map(conn =>
          elementTypes.map(elem => {
            const source = path.direction === "out" ? type : elem;
            const target = path.direction === "out" ? elem : type;
            api.addConnectionConstraints(conn.uuid, [source.uuid, target.uuid]);
            return true;
          })
        )
      );

      return {
        ...path,
        elementTypes: elementTypes.map(d => ({
          name: d.name,
          uuid: d.uuid
        })),
        connectionTypes: connectionTypes.map(d => ({
          name: d.name,
          uuid: d.uuid
        }))
      };
    })
  );
  // update schema
  dispatch(refreshAll());
  return results;
};
