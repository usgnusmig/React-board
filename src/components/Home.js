import React from "react";
import styled from "styled-components";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";

const Layout = styled.div``;

const Home = () => {
  return (
    <Layout>
      {/* 네비게이션 바 */}
      <Nav />

      {/* 메인페이지 */}
      <Main />
    </Layout>
  );
};

export default Home;
