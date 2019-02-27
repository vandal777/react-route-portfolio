/*
import ReactDOM from "react-dom";
import App from "./App";
*/
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import { hydrate, render } from "react-dom";
/*
ReactDOM.render((
  // <App />,
  <BrowserRouter>
    <Nav />
  </BrowserRouter>),
  document.getElementById("root"));*/

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><Nav /></BrowserRouter>, rootElement);
} else {
  render(<BrowserRouter><Nav /></BrowserRouter>, rootElement);
}