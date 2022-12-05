import React, { useState } from "react";
import TypeFields from "./Fields";
import TypeSchema from "./Schema";
import Views from "./Views";
import Info from "./Info";
import Header from "./Header";
import ButtonGroup from "../../../../../components/ButtonGroup";
import styles from "./styles.module.scss";

const pages = [
  {
    label: "Fields",
    page: TypeFields
  },
  {
    label: "Schema",
    page: TypeSchema
  },
  {
    label: "Screens",
    page: Views
  },
  {
    label: "Info",
    page: Info
  }
];

const Sidebar = ({ type, isOpen }) => {
  const [activePage, setActivePage] = useState(pages[0].label);
  const ActivePage = pages.find((d) => d.label === activePage).page;

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <Header />
      <ButtonGroup
        className={`tabs ${styles.actions}`}
        buttons={pages.map((d) => ({
          ...d,
          active: d.label === activePage
        }))}
        onClick={(page) => {
          setActivePage(page.label);
        }}
      />
      <div className={styles.content}>
        <ActivePage />
      </div>
    </div>
  );
};
export default Sidebar;
