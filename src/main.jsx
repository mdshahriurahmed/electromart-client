
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import Context, { ElectroContext } from "./Components/Context.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);




