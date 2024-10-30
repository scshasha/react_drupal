import React from "react"
import ReactDOM from "react-dom/client"
import { render} from "react-dom";
import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

const root = ReactDOM.createRoot(document.getElementById('react-app-block'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
