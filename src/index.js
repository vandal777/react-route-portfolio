import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render((
  // <App />,
  <BrowserRouter>
    <Nav />
  </BrowserRouter>),
  document.getElementById("root"));
