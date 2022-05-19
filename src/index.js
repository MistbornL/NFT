import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollOnTop from "./services/ScrollOnTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScrollOnTop>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScrollOnTop>
  </React.StrictMode>
);
