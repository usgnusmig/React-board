import React, { Fragment, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { AuthContext } from "./context/AuthContext";

import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const App = () => {
  const userInfo = useContext(AuthContext);
  console.log(userInfo);

  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
};

export default App;
