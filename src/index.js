import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserAuth from "./Store/auth";
import { legacy_createStore as configureStore } from "redux";
import { Provider } from "react-redux";
const store = configureStore(UserAuth);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>
);
