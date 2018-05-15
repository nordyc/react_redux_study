import React from "react";
import { childrenWithProps } from "../utils/reactUltils";

export default props => (
  <div>
    <h1>Família</h1>
    {childrenWithProps(props.children, props)}
  </div>
);
