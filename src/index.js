import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollOnTop from "./services/ScrollOnTop";
import ErrorBoundary from "./services/errorboundary/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ScrollOnTop>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ScrollOnTop>
    </ErrorBoundary>
  </React.StrictMode>
);
