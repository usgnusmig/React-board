import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%
    height: 100%
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
};

export default App;
