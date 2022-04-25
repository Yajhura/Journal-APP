import React from "react";

import { Provider } from "react-redux";
import { store } from "./Store/Store";

import AppRouter from "./Routes/AppRouter";

import "./Styles/styles.scss";
const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default JournalApp;
