import React from "react";
import { Label, Input, Form, FormGroup, Row, Col } from "reactstrap";
import Select from "react-select";
import ConnectionBuilder from "../../../../../components/ConnectionBuilder";
import { get } from "lodash";
import slugify from "slugify";
import styles from "./styles.module.scss";

const PREFIX = "https://exaptive-city-content.s3.amazonaws.com/images/schema";
const fieldTypes = [
  {
    value: "connection",
    label: "connection",
    image: `${PREFIX}/connection.svg`
  },
  { value: "text", label: "text", image: `${PREFIX}/string.svg` },
  { value: "number", label: "number", image: `${PREFIX}/number.svg` },
  { value: "boolean", label: "boolean", image: `${PREFIX}/boolean.svg` },
  { value: "image", label: "image", image: `${PREFIX}/image.svg` },
  { value: "date", label: "date", image: `${PREFIX}/date.svg` },
  { value: "color", label: "color", image: `${PREFIX}/color.svg` }
];

const interfaces = {
  text: ["textbox", "textarea", "slider", "dropdown", "radioGroup"],
  longtext: ["textarea", "richText"],
  color: ["color picker"],
  url: ["textbox"],
  number: ["number", "slider", "dropdown", "radioGroup"],
  boolean: ["checkbox"],
  image: ["image", "imageChoice"],
  date: ["datepicker"],
  connection_multiple: [
    "autocomplete",
    "dropdown",
    "checkboxGroup",
    "imageChoice",
    "connectionList",
    "multiple choice grid"
  ],
  connection_single: ["dropdown", "autocomplete", "slider", "radioGroup"]
};

const Appearance = ({ type, formValue, updateValues }) => {
  if (!get(interfaces, type)) return null;
  const _opts = get(interfaces, type).map(d => ({
    label: d,
    value: d
  }));
  const inputType = formValue.inputType;
  return (
    <FormGroup>
      <Label>Input Type</Label>
      <Select
        value={inputType && _opts.find(d => d.value === inputType)}
        onChange={data => {
          updateValues({ inputType: data.value });
        }}
        options={_opts}
      />
    </FormGroup>
  );
};

const TextOptions = ({ type, formValue, updateValues, isUpdating }) => {
  if (isUpdating) return null;
  const _opts = [
    {
      label: (
        <div>
          Short text, exact search
          <div className="subtitle">
            Maximum 255 characters (Use for titles, names, tags, URLs, e-mail
            addresses)
          </div>
        </div>
      ),
      value: "text"
    },
    {
      label: (
        <div>
          Long text, full-text search
          <div className="subtitle">
            No sorting (Use for descriptions, text paragraphs, articles)
          </div>
        </div>
      ),
      value: "longtext"
    }
  ];
  return (
    <FormGroup>
      {_opts.map(d => (
        <FormGroup check>
          <Label>
            <Input
              checked={d.value === formValue.type}
              onChange={() => {
                updateValues({
                  type: d.value,
                  inputType: ""
                });
              }}
              type="radio"
              name="radio1"
            />{" "}
            {d.label}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
};
const TextAppearance = ({ type, formValue, updateValues }) => {
  return (
    <Appearance type={type} formValue={formValue} updateValues={updateValues} />
  );
};
const ConnectionOptions = ({ type, formValue, updateValues, types }) => {
  const { query } = formValue;
  return (
    <FormGroup>
      <Label>Query</Label>
      <ConnectionBuilder
        types={types}
        paths={
          query &&
          query.connection &&
          query.connection.map(q => ({
            targetTypes: q.elementTypes,
            direction: q.direction,
            connectionTypes: q.connectionTypes
          }))
        }
        onChange={query => {
          updateValues({
            "query.connection": query.map(q => ({
              elementTypes: q.targetTypes,
              direction: q.direction,
              connectionTypes: q.connectionTypes
            }))
          });
        }}
      />
    </FormGroup>
  );
};

const ConnectionAppearance = ({ type, formValue, updateValues }) => {
  const { multiple } = formValue;
  const dataType = multiple ? "connection_multiple" : "connection_single";
  return (
    <>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            checked={multiple}
            onChange={event => {
              const target = event.target;
              updateValues({ multiple: target.checked });
            }}
          />
          Multiple
        </label>
      </FormGroup>
      <Appearance
        type={dataType}
        formValue={formValue}
        updateValues={updateValues}
      />
    </>
  );
};

const fieldOptions = {
  text: {
    options: TextOptions,
    appearance: TextAppearance
  },
  longtext: {
    options: TextOptions,
    appearance: TextAppearance
  },
  connection: {
    options: ConnectionOptions,
    appearance: ConnectionAppearance
  }
};

const CreateField = ({ field, formValue, updateValues, types }) => {
  // const instances = field ? field.getInstances() : [];
  const isUpdating = !!formValue.uuid;
  const isProperty = !(formValue.type === "connection");
  const { name, type } = formValue;
  const property = get(formValue, "query.property");
  const defaults = {
    property: {
      query: { type: "property", property: "" }
    },
    connection: {
      multiple: true,
      inputType: "autocomplete",
      query: {
        type: "connection",
        connection: [
          {
            elementTypes: [],
            direction: "out",
            connectionTypes: []
          }
        ]
      }
    }
  };
  const typeForm = (
    <FormGroup>
      {fieldTypes.map(d => (
        <div
          className={styles.option}
          onClick={() => {
            const isProperty = !(d.value === "connection");
            const defs = isProperty ? defaults.property : defaults.connection;
            if (get(interfaces, d.value)) {
              defs.inputType = get(interfaces, d.value)[0];
            }
            updateValues({
              ...defs,
              type: d.value
            });
          }}
        >
          <img className={styles.optionImage} src={d.image} alt={d.label} />{" "}
          <span>{d.label}</span>
        </div>
      ))}
    </FormGroup>
  );

  const fieldForm = (
    <>
      <div className="subtitle">Settings</div>
      <Row form>
        <Col>
          <FormGroup>
            <Label>Display Name</Label>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => {
                const newVals = { name: e.target.value };
                if (isProperty && slugify(name) === property) {
                  newVals["query.property"] = slugify(e.target.value);
                }
                updateValues(newVals);
              }}
            />
          </FormGroup>
        </Col>
        {isProperty && (
          <Col>
            <FormGroup>
              <Label>Field Id (Property)</Label>
              <Input
                type="text"
                disabled={isUpdating}
                value={property}
                onChange={e =>
                  updateValues({ "query.property": e.target.value })
                }
              />
            </FormGroup>
          </Col>
        )}
      </Row>
      {type &&
        (fieldOptions[type] && fieldOptions[type].options && (
          <>
            {fieldOptions[type].options({
              type,
              formValue,
              updateValues,
              types,
              isUpdating
            })}
          </>
        ))}
      {(type &&
        (fieldOptions[type] && fieldOptions[type].appearance && (
          <>
            <div className="subtitle">Appearance</div>
            {fieldOptions[type].appearance({
              type,
              formValue,
              updateValues,
              types
            })}
          </>
        ))) || (
        <Appearance
          type={type}
          formValue={formValue}
          updateValues={updateValues}
        />
      )}
    </>
  );

  const FormComponent = !type ? typeForm : fieldForm;

  return <Form>{FormComponent}</Form>;
};

export default CreateField;
