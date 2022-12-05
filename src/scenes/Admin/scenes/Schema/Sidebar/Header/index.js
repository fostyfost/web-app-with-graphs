import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { selectInfo } from "../../typeSlice";

const Header = () => {
  const { name, type, extraData } = useSelector(selectInfo);
  const { color } = extraData || { color: "blue", icon: "" };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.icon} style={{ background: color }} />
        <div className={styles.headerContent}>
          <div>{name}</div>
          <div className={styles.subtitle}>
            {type === "element" ? "Element Type" : "Connection Type"}
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <UncontrolledDropdown className="ghost small">
          <DropdownToggle>
            <FontAwesomeIcon icon={faEllipsisH} />
          </DropdownToggle>
          <DropdownMenu>
            {[
              { label: "view data" },
              { label: "edit" },
              { label: "delete" }
            ].map(d => (
              <DropdownItem key={d.label} onClick={() => {}}>
                {d.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
};

export default Header;
