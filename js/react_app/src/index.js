import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const root = ReactDOM.createRoot(document.getElementById('react_drupal__react_app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
