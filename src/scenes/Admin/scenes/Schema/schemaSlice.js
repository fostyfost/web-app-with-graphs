import { createSlice } from "@reduxjs/toolkit";
import { setActiveType } from "./typeSlice";

import api from "../../../../api";

export const schemaSlice = createSlice({
  name: "schema",
  initialState: {
    elements: {},
    connections: {}
  },
  reducers: {
    setSchema: (state, action) => {
      state.elements = action.payload.elements.reduce((obj, d) => {
        obj[d.uuid] = d;
        return obj;
      }, {});
      state.connections = action.payload.connections.reduce((obj, d) => {
        obj[d.uuid] = d;
        return obj;
      }, {});
    }
  }
});

export const { setSchema, setField } = schemaSlice.actions;

export const getElement = (state, id) => state.schema.elements[id];
export const getConnection = (state, id) => state.schema.connections[id];
export const getSchema = state => ({
  elements: Object.keys(state.schema.elements).map(id => getElement(state, id)),
  connections: Object.keys(state.schema.connections).map(id =>
    getConnection(state, id)
  )
});

export const createElementType = data => async dispatch => {
  const newType = await api.createElementType(data);
  dispatch(setActiveType(newType));
  dispatch(refreshAll());
};

export const createConnectionType = data => async dispatch => {
  const newType = await api.createConnectionType(data);
  dispatch(setActiveType(newType));
  dispatch(refreshAll());
};

export const setCity = data => dispatch => {
  api.data = data;
  dispatch(refreshAll());
};

export const refreshAll = data => dispatch => {
  dispatch(
    setSchema({
      elements: api.getElementTypes(),
      connections: api.getConnectionTypes()
    })
  );
};

export default schemaSlice.reducer;

export const createConnection = data => async dispatch => {
  const { query } = data;
  await dispatch(createFromPathQuery(query));
  dispatch(refreshAll());
};

async function resolveElementType(type) {
  if (type.created) {
    const newType = api.createElementType({ name: type.name });
    return newType;
  }
  return api.getElementType(type.uuid);
}

async function resolveConnectionType(type) {
  if (type.created) {
    return api.createConnectionType({ name: type.name });
  }
  return api.getConnectionType(type.uuid);
}

// create types and constraints from path query
export const createFromPathQuery = query => async dispatch => {
  const results = await Promise.all(
    query.map(async path => {
      const sourceTypes = await Promise.all(
        path.sourceTypes.map(resolveElementType)
      );
      const connectionTypes = await Promise.all(
        path.connectionTypes.map(resolveConnectionType)
      );
      const targetTypes = await Promise.all(
        path.targetTypes.map(resolveElementType)
      );

      // update connectionTypes
      await Promise.all(
        connectionTypes.map(conn =>
          sourceTypes.map(src =>
            targetTypes.map(dst => {
              const source = path.direction === "out" ? src : dst;
              const target = path.direction === "out" ? dst : src;
              api.addConnectionConstraints(conn.uuid, [
                source.uuid,
                target.uuid
              ]);
              return true;
            })
          )
        )
      );

      return {
        ...path,
        sourceTypes: sourceTypes.map(d => ({
          name: d.name,
          uuid: d.uuid
        })),
        connectionTypes: connectionTypes.map(d => ({
          name: d.name,
          uuid: d.uuid
        })),
        targetTypes: targetTypes.map(d => ({
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
