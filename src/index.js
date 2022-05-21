import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollOnTop from "./services/ScrollOnTop";
import ErrorBoundary from "./services/errorboundary/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ScrollOnTop>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ScrollOnTop>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
