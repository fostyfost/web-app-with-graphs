/**
 * Mock api that would be replaced with the client
 */
import Schema from "./schema";
let instance = null;

export class SchemaApi {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this._schema = new Schema();
    return instance;
  }

  get schema() {
    return this._schema;
  }

  set data(data) {
    this._schema = new Schema(data);
  }

  createElementType(data) {
    return this._schema.createElementType(data).getInfo();
  }

  createConnectionType(data) {
    return this._schema.createConnectionType(data).getInfo();
  }

  getElementTypes() {
    return this._schema.getElementTypes().map(d => ({ ...d.getInfo() }));
  }

  getConnectionTypes() {
    return this._schema.getConnectionTypes().map(d => ({ ...d.getInfo() }));
  }

  // getFields() {
  //   return this._schema.getFields().map(d => ({ ...d.getInfo() }));
  // }

  getElementType(uuid) {
    return this._schema.getElementType(uuid).getInfo();
  }

  getConnectionType(uuid) {
    return this._schema.getConnectionType(uuid).getInfo();
  }

  getType(uuid) {
    return this._schema.getType(uuid).getInfo();
  }

  // getField(uuid) {
  //   return this._schema.getField(uuid).getInfo();
  // }

  // updateField(uuid, data) {
  //   const field = this._schema.getField(uuid);
  //   field.update(data);
  //   return field.getInfo();
  // }

  addConnectionConstraints(uuid, constraint) {
    const connectionType = this._schema.getConnectionType(uuid);
    if (!uuid) return;
    connectionType.addConnectionConstraints(constraint);
  }

  /**
   * TYPE CALLS
   */

  type_getFields(uuid, opts) {
    const type = this._schema.getType(uuid);
    return type.getFields(opts).map(d => ({ ...d.getInfo() }));
  }

  type_createField(uuid, field) {
    const type = this._schema.getType(uuid);
    return type.createField(field);
  }

  type_addField(uuid, field) {
    const type = this._schema.getType(uuid);
    return type.addField(field);
  }

  type_getField(uuid, field, opts) {
    const type = this._schema.getType(uuid);
    return type.getField(field, opts).getInfo();
  }

  type_updateField(uuid, field, data) {
    const type = this._schema.getType(uuid);
    return type.updateField(field, data);
  }

  type_removeField(uuid, field) {
    const type = this._schema.getType(uuid);
    return type.removeField(field);
  }

  type_addProperty(uuid, property) {
    const type = this._schema.getType(uuid);
    return type.addProperty(property);
  }

  type_updateProperty(uuid, property, data) {
    const type = this._schema.getType(uuid);
    return type.updateProperty(property, data);
  }

  type_getProperties(uuid) {
    const type = this._schema.getType(uuid);
    return type.getProperties();
  }

  type_getConnections(uuid, opts) {
    const type = this._schema.getType(uuid);
    return type.getConnections(opts);
  }

  type_getUnmappedSchema(uuid) {
    const type = this._schema.getType(uuid);
    return type.getUnmappedSchema();
  }
}

export default new SchemaApi();
