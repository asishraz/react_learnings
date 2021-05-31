import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import ToDoContainer from "./components/ToDoContainer";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
