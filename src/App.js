import React, { Fragment, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import axios from "axios";
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
  useEffect(() => {
    getUser();
  });

  const getUser = () => {
    axios
      .get("https://915033b2-5877-40f2-b152-d946d5ecef70.mock.pstmn.io/user")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
};

export default App;
