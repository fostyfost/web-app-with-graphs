import React, { useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import {
  pages,
  selectCity,
  setCity,
  setPage,
  selectPage,
  cities
} from "./appSlice";
import { setCity as setCitySchema } from "./scenes/Schema/schemaSlice";

import ButtonGroup from "../../components/ButtonGroup";
import ModalManager from "./scenes/modals/ModalManager";

export default function App() {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const activePage = useSelector(selectPage);
  const ActivePage = pages.find(d => d.label === activePage).page;

  const _setCity = d => {
    dispatch(setCity(d.label));
    dispatch(setCitySchema(d.data));
  };
  useEffect(() => {
    _setCity(cities[0]);
  }, []);

  return (
    <>
      <ModalManager />
      <div className="page-header">
        <div className="header-section">
          <UncontrolledDropdown className="ghost small">
            <DropdownToggle caret>{city}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Sample Cities</DropdownItem>
              {cities.map(d => (
                <DropdownItem
                  key={d.label}
                  onClick={e => {
                    _setCity(d);
                  }}
                >
                  {d.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <ButtonGroup
          className="tabs"
          buttons={pages
            .filter(d => !d.hidden)
            .map(d => ({ ...d, active: d.label === activePage }))}
          onClick={page => {
            dispatch(setPage(page.label));
          }}
        />
        <div style={{ padding: "0 8px" }} className="header-section">
          <Button className="type-button light small">View City</Button>
          <div className="avatar" />
        </div>
      </div>
      <div className="page-content">
        <ActivePage city={city} />
      </div>
    </>
  );
}
