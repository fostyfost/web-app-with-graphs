import { createSlice } from "@reduxjs/toolkit";

import covidSchema from "./city/covid";
import def from "./city/def";

import SchemaPage from "./scenes/Schema";
import DataPage from "./scenes/Data";
import AppPage from "./scenes/Application";
import GraphPage from "./scenes/Graph";
import FormPage from "./scenes/Form";

export const cities = [
  { label: "Simple", data: def },
  { label: "Empty", data: null },
  { label: "Covid", data: covidSchema }
];

export const pages = [
  {
    label: "Schema",
    page: SchemaPage
  },
  {
    label: "Data",
    page: DataPage
  },
  {
    label: "Graph",
    page: GraphPage
  },
  {
    label: "Application",
    page: AppPage
  },
  {
    label: "Form",
    page: FormPage,
    hidden: true
  }
];

export const schemaSlice = createSlice({
  name: "app",
  initialState: {
    activeCity: cities[0].label,
    activePage: pages[0].label
  },
  reducers: {
    setCity: (state, action) => {
      const city = action.payload;
      state.activeCity = city;
    },
    setPage: (state, action) => {
      const page = action.payload;
      state.activePage = page;
    }
  }
});

export const { setCity, setPage } = schemaSlice.actions;
export const selectCity = state => state.app.activeCity;
export const selectPage = state => state.app.activePage;

export default schemaSlice.reducer;
