import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectFields } from "../Schema/typeSlice";
import { setPage } from "../../appSlice";
import { setFields, getForm, hideField } from "./formSlice";

import DraggableList from "../../../../components/DraggableList";
import ConnectionQuery from "../../../../components/ConnectionQuery";

import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ButtonGroup from "../../../../components/ButtonGroup";

const tabs = [{ label: "Layout" }, { label: "Settings" }];

const Form = () => {
  const [activePage, setActivePage] = useState(tabs[0].label);
  const dispatch = useDispatch();
  const typeFields = useSelector(selectFields);
  const { name, typeName, fields } = useSelector(getForm);

  const fieldMap = fields.reduce((obj, d) => {
    obj[d.uuid] = d;
    return obj;
  }, {});
  const avaliableFields = typeFields.filter(d => !fieldMap[d.uuid]);

  // initialize form to be all fields on the type
  useEffect(() => {
    dispatch(setFields(typeFields));
  }, []);

  const getFieldActions = data => [
    {
      label: "edit",
      action: data => {
        // onEdit(data);
      }
    },
    {
      label: data.required ? "set as optional" : "set as required",
      action: data => {
        // dispatch(
        //   updateField({
        //     typeUUID: activeType,
        //     uuid: data.uuid,
        //     data: { required: !data.required }
        //   })
        // );
      }
    },
    {
      label: data.hide ? "show" : "hide",
      action: data => {
        dispatch(hideField(data));
        // dispatch(
        //   updateField({
        //     typeUUID: activeType,
        //     uuid: data.uuid,
        //     data: {
        //       uuid: data.uuid,
        //       data: { hide: !data.hide }
        //     }
        //   })
        // );
      }
    }
  ];

  const _fields = (
    <DraggableList
      items={fields}
      itemRenderer={({ data }) => {
        return (
          <div className={styles.fieldBlock}>
            <div className="fieldHeader">
              <div>
                <div className="fieldLabel">
                  <span>{data.name}</span>
                </div>
              </div>
              <UncontrolledDropdown className="ghost small">
                <DropdownToggle>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </DropdownToggle>
                <DropdownMenu>
                  {getFieldActions(data).map(d => (
                    <DropdownItem
                      key={d.label}
                      onClick={e => {
                        if (d.action) {
                          d.action(data);
                        }
                      }}
                    >
                      {d.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <input className={styles.input} />
          </div>
        );
      }}
      onUpdate={() => {}}
    />
  );

  return (
    <div className={styles.root}>
      <div className="page-header">
        <div className={styles.headerTitle}>
          <Button
            className={`type-button ghost small ${styles.headerTitleItem}`}
            onClick={() => {
              dispatch(setPage("Schema"));
            }}
          >
            {typeName}
          </Button>
          <span className={`small ${styles.headerTitleItem}`}>/ </span>
          <span className={`small ${styles.headerTitleItem}`}>{name}</span>
        </div>
        <ButtonGroup
          className="tabs"
          buttons={tabs.map(d => ({
            ...d,
            active: d.label === activePage
          }))}
          onClick={page => {
            setActivePage(page.label);
          }}
        />
        <div className={styles.actions}>
          <Button className={`light small ${styles.actionItem}`}>view</Button>
          <Button color="primary" className={`small ${styles.actionItem}`}>
            Save
          </Button>
        </div>
      </div>
      <div className="page-content">
        <div className="sidebar">
          <div class="type-header">
            <div class="title">Hidden Fields</div>
          </div>
          {avaliableFields.map(data => (
            <div
              onClick={() => {
                dispatch(setFields([...fields, data]));
              }}
              className={styles.fieldBlock}
            >
              <div className="fieldHeader">
                <div>
                  <div className="fieldLabel">
                    <span>{data.name}</span>
                    <span className="subtitle"> ({data.inputType})</span>
                  </div>
                  <div className="subtitle">
                    {data.query.type === "connection" ? (
                      <ConnectionQuery paths={data.query.connection} />
                    ) : (
                      data.subtitle
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!avaliableFields.length && (
            <div className="subtitle" style={{ paddingBottom: "16px" }}>
              No hidden fields
            </div>
          )}
          <Button className={`light small ${styles.actionItem}`} block>
            Create field
          </Button>
          <hr />
          <div class="type-header">
            <div class="title">Static Content</div>
          </div>
          <div>Image</div>
          <div>Video</div>
          <div>Rich Text</div>
          <div>HTML</div>
        </div>
        <div className="main">
          <div className={styles.container}>
            <div className={styles.formBuilder}>
              <div className={styles.formContainer}>
                <h6>{`${name} Form`}</h6>
                {_fields}
              </div>
              <div className={styles.formActions}>
                <Button className={`light small ${styles.actionItem}`}>
                  Add page
                </Button>
                <Button
                  color="primary"
                  className={`small ${styles.actionItem}`}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
