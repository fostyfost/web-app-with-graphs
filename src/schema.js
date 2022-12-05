import { keyBy, groupBy } from "lodash";
import capitalize from "capitalize";

const generateId = function() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

/*
Mock Schema Model

  Schema
  Elements
    name
    uuid
    description
    properties
    extraData
  
  Connections

  Fields
    uuid,
    name,
    query,
    inputType,
    options,
    type: "text|connection|number" // this should be on the property

  Fields
  [{
    uuid,
    unique,
    required,
    show
  }]

  Properties
  [{
    name,
    type,
    unique,
    required,
    isLabel
  }]
*/

const Schema = function(defSchem) {
  const that = {
    getElementTypes,
    getConnectionTypes,
    getFields,
    getElementType,
    getConnectionType,
    getType,
    getField,
    createElementType,
    createConnectionType,
    createField
  };

  const schema = {
    elementTypes: [],
    connectionTypes: [],
    fields: []
  };

  function getElementTypes() {
    return schema.elementTypes;
  }

  function getConnectionTypes() {
    return schema.connectionTypes;
  }

  function getFields() {
    return schema.fields;
  }

  function getElementType(uuid) {
    return schema.elementTypes.find(d => d.uuid === uuid);
  }

  function getConnectionType(uuid) {
    return schema.connectionTypes.find(d => d.uuid === uuid);
  }

  function getType(uuid) {
    return getElementType(uuid) || getConnectionType(uuid);
  }

  function getField(uuid) {
    return schema.fields.find(d => d.uuid === uuid);
  }

  function _parseMetaData(type, info) {
    return {
      ...type,
      meta: {}
    };
  }

  function initSchema(graph) {
    if (graph) {
      const fields = graph.schema.fields || [];
      const fieldLookup = keyBy(fields, "uuid");

      // NO SHARED FIELDS
      // if (graph.schema.fields) {
      //   graph.schema.fields.forEach(d => addField(d));
      // }
      graph.schema.elements.forEach(d => {
        const typeFields = (d.fields || []).map(f => fieldLookup[f.uuid]);
        addElementType({ ...d, fields: typeFields }, graph.additional || {});
      });
      graph.schema.connections.forEach(d => {
        const typeFields = (d.fields || []).map(f => fieldLookup[f.uuid]);
        addConnectionType({ ...d, fields: typeFields }, graph.additional || {});
      });

      // create missing fields
      schema.elementTypes.forEach(d => {
        d.generateFields();
      });
    }
  }

  function createField(info) {
    const _info = { ...info, uuid: generateId() };
    return addField(_info);
  }

  function addField(info) {
    const newField = new Field(info, that);
    schema.fields.push(newField);
    return newField;
  }

  function addElementType(type, info) {
    const _type = _parseMetaData(type, info);
    const newType = new ElementType(_type, that);
    schema.elementTypes.push(newType);
    return newType;
  }

  function createElementType(data) {
    const defInfo = {
      name: "",
      description: "",
      searchOptions: {},
      properties: {},
      extraData: {
        auxPropertyMap: {},
        properties: {},
        aux: {},
        connections: []
      },
      aux: {},
      meta: {}
    };
    const _type = { ...defInfo, ...data, uuid: generateId() };
    return addElementType(_type);
  }

  function createConnectionType(data) {
    const defInfo = {
      name: "",
      description: "",
      srcDstTypes: [],
      srcDstTypeNames: [],
      properties: {},
      aux: {},
      extraData: {
        properties: {},
        aux: {}
      }
    };
    const _type = { ...defInfo, ...data, uuid: generateId() };
    return addConnectionType(_type);
  }

  function addConnectionType(type, info) {
    const _type = _parseMetaData(type, info);
    const newType = new ConnectionType(_type, that);
    schema.connectionTypes.push(newType);
    return newType;
  }

  initSchema(defSchem);

  return that;
};

const ConnectionType = function(info, schema) {
  const that = Type(info, schema);

  that.addConnectionConstraints = pair => {
    let { srcDstTypes } = that.getInfo();
    if (!srcDstTypes) srcDstTypes = [];
    if (srcDstTypes.some(p => p[0] === pair[0] && p[1] === pair[1])) {
      return;
    }
    that.updateInfo({ srcDstTypes: [...srcDstTypes, pair] });
  };

  return that;
};

const ElementType = function(info, schema) {
  const that = Type(info, schema);

  function getConnections(
    opts = { includeWildcards: false, includeInbound: false }
  ) {
    const elementType = that.getInfo();
    const connectionTypes = schema.getConnectionTypes();
    const connections = [];
    connectionTypes.forEach(d => {
      const type = d.getInfo();
      if (type.srcDstTypes) {
        type.srcDstTypes.forEach(p => {
          if (p.includes(elementType.uuid)) {
            const index = p.indexOf(elementType.uuid);
            const direction = index === 0 ? "out" : "in";
            const element = index === 0 ? p[1] : p[0];
            const meta = schema.getConnectionType(type.uuid).getInfo().meta;
            if (!opts.includeInbound && direction === "in") {
              return;
            }
            const target = schema.getElementType(element).getInfo();
            connections.push({
              type: { name: type.name, uuid: type.uuid },
              direction,
              target: { name: target.name, uuid: target.uuid },
              meta
            });
          }
        });
      } else if (opts.includeWildcards) {
        connections.push({
          type: { name: type.name, uuid: type.uuid },
          direction: "any",
          target: { name: "any" },
          meta: schema.getConnectionType(type.uuid).meta
        });
      }
    });
    return connections;
  }

  function generateFields(opts) {
    const { connections, properties } = getUnmappedSchema();

    // const connections = getConnections(opts);
    // const properties = that.getProperties(opts);

    const grouped = groupBy(connections, "type.name");
    const connectionFields = [];
    Object.keys(grouped).forEach(group => {
      const directions = groupBy(grouped[group], "direction");
      Object.keys(directions).forEach(dir => {
        connectionFields.push({
          name: capitalize(group),
          inputType: "autocomplete",
          query: {
            type: "connection",
            connection: [
              {
                connectionTypes: [
                  { name: group, uuid: grouped[group][0].type.uuid }
                ],
                elementTypes: directions[dir].map(type => ({
                  name: type.target.name,
                  uuid: type.target.uuid
                })),
                direction: dir
              }
            ]
          }
        });
      });
    });

    const propertyFields = properties.map(prop => ({
      name: capitalize(prop.name),
      inputType: "textbox",
      query: { type: "property", property: prop.name }
    }));

    // return [...propertyFields, ...connectionFields];

    // create them
    propertyFields.forEach(d => that.addField(d));
    connectionFields.forEach(d => that.addField(d));
  }

  function getUnmappedSchema(opts) {
    const properties = that.getUnmappedSchema();

    const fields = that.getFields();
    let connections = [
      ...getConnections({ includeWildcards: true, includeInbound: true })
    ];

    fields.forEach(d => {
      const query = d.getInfo().query;
      if (query.type === "connection") {
        query.connection.forEach(path => {
          connections = connections.filter(conn => {
            if (
              path.direction === conn.direction &&
              path.connectionTypes.map(d => d.name).indexOf(conn.type.name) >
                -1 &&
              path.elementTypes.map(d => d.name).indexOf(conn.target.name) > -1
            ) {
              return false;
            }
            return true;
          });
        });
      }
    });
    return { properties, connections };
  }

  return { ...that, getConnections, generateFields, getUnmappedSchema };
};

const Type = function(info, schema) {
  /*
  {
    properties: {},
    fields: []
  }
  */

  const that = {
    uuid: info.uuid,
    getInfo,
    getType,

    getProperties,
    getProperty,
    addProperty,
    updateProperty,

    getField,
    getFields,
    setFields,
    addField,
    createField,
    updateField,
    removeField,
    getUnmappedSchema,

    addConnections,
    updateInfo
  };

  let fields = [];
  let _info = { ...info };

  if (info.fields) {
    delete _info.fields;
    info.fields.forEach(d => addField(d));
  }

  function getInfo() {
    return _info;
  }

  function updateInfo(data) {
    _info = { ..._info, ...data };
  }

  function getType() {
    return _info.hasOwnProperty("srcDstTypes") ? "connection" : "element";
  }

  function getProperties() {
    return Object.keys(_info.properties)
      .map(prop => ({
        ..._info.properties[prop],
        name: prop
      }))
      .filter(d => d.name !== "*");
  }

  function getProperty(name) {
    return _info.properties[name];
  }

  function updateProperty(name, data) {
    _info.properties = {
      ..._info.properties,
      [name]: { ..._info.properties[name], ...data }
    };
  }

  function addProperty(prop) {
    _info.properties = {
      ..._info.properties,
      [prop.name]: {
        required: false,
        type: prop.type || "text",
        includeInGraph: true
      }
    };
  }

  function getFields(opts = { resolve: true }) {
    // if (opts.resolve) {
    //   return _info.fields.map(d => schema.getField(d.uuid));
    // }
    return fields;
  }

  function getField(uuid, opts) {
    return fields.find(d => d.uuid === uuid);
  }

  // used to change ordering of fields
  function setFields(_sorted) {
    // fields = fields.map(d => ({ uuid: d.uuid }));
    fields.sort(function(a, b) {
      return _sorted.indexOf(a) - _sorted.indexOf(b);
    });
  }

  function updateField(uuid, data) {
    let fieldIndex = fields.findIndex(d => d.uuid === uuid);
    if (fieldIndex < 0) return;
    // fields[fieldIndex] = { ...fields[fieldIndex], ...data };
    fields[fieldIndex].update(data);
  }

  function removeField(uuid) {
    fields = fields.filter(d => d.uuid !== uuid);
  }

  // function addField(field) {
  //   _info.fields = [..._info.fields, { uuid: field.uuid }];
  // }
  function createField(info) {
    const _info = { ...info, uuid: generateId() };
    return addField(_info);
  }

  function addField(info) {
    const newField = new Field(info, that);
    fields.push(newField);
    return newField;
  }

  function addConnections(opts) {}

  function getUnmappedSchema(opts) {
    // const fields = getFields();
    const fieldProps = {};
    fields.forEach(d => {
      const query = d.getInfo().query;
      if (query.type === "property") {
        fieldProps[query.property] = true;
      }
    });
    const properties = getProperties();
    return properties.filter(prop => !fieldProps.hasOwnProperty(prop.name));
  }

  return that;
};

const Field = function(info, schema) {
  const that = {
    uuid: info.uuid,
    getInfo,
    getQueryLabel,
    getActions,
    runAction,
    update,
    getInstances
  };
  let _info = { ...info };

  function getInfo() {
    return { ..._info, subtitle: getQueryLabel(_info.query) };
  }

  function update(data) {
    _info = { ..._info, ...data };
  }

  function getInstances() {
    const instances = [];
    const types = schema.getElementTypes();
    types.forEach(type => {
      const fields = type.getFields();
      const isOnType = fields.some(field => field.uuid === _info.uuid);
      if (isOnType) {
        instances.push({
          type: "elementType",
          uuid: type.uuid,
          name: type.getInfo().name
        });
      }
    });
    return instances;
  }

  const actions = {
    setAsLabel: {
      filter: () => {},
      run: val => {},
      get: () => {}
    },
    setRequired: {},
    setHidden: {}
  };

  function getActions() {
    return Object.keys(actions);
  }

  function runAction(action) {
    return [];
  }

  function getQueryLabel() {
    if (!_info.query) return "";
    if (_info.query.type === "property")
      return `property: ${_info.query.property}`;
    return _info.query.connection.map(
      d => `${getConnLabel(d)} ${getTargetLabel(d)}`
    );
  }

  function getConnLabel({ connectionTypes, direction }) {
    const label = connectionTypes.map(d => d.name).join(", ");
    if (direction === "in") return `<-[${label}]-`;
    if (direction === "out") return `-[${label}]->`;
    return `-[${label}]-`;
  }
  function getTargetLabel({ elementTypes, direction }) {
    if (!elementTypes.length) {
      return "(*)";
    }
    return `(${elementTypes.map(type => type.name).join(", ")})`;
  }

  return that;
};

export default Schema;
