import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
};

export default App;
