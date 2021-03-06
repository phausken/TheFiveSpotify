import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import App from "./app";
import { ProtectedRoute } from "../util/route_util";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;

// <ProtectedRoute path="#" component={App} />
