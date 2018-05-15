import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <Family lastName="Carvalho">
    <Member name="Allan" />
    <Member name="Mauricio" />
    <Member name="Silvania" />
  </Family>,
  document.getElementById("app")
);
