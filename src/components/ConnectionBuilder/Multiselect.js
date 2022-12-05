import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const toSchema = d => ({
  uuid: d.value,
  name: d.label,
  created: !!d.created
});
const toInput = d => ({ value: d.uuid, label: d.name, created: d.created });

const Multiselect = ({ options, value, onUpdate, placeholder }) => {
  const [created, setCreated] = useState([]);
  const _value = value.map(toInput);
  const _options = options.map(toInput);
  const _onUpdate = data => onUpdate(data.map(toSchema));
  return (
    <CreatableSelect
      value={_value}
      onChange={data => {
        _onUpdate(data || []);
      }}
      onCreateOption={label => {
        const option = { label, value: label, created: true };
        setCreated([...created, option]);
        _onUpdate([..._value, option]);
      }}
      options={[..._options, ...created]}
      isMulti
      placeholder={placeholder || "Select..."}
      isClearable={false}
      className="multi-select"
      classNamePrefix="select"
    />
  );
};

export default Multiselect;
