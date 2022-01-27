import React, { useState } from "react";
import styled from "styled-components";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";

const Layout = styled.div``;

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Layout>
      {/* 네비게이션 바 */}
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />

      {/* 메인페이지 */}
      <Main isLogin={isLogin} />
    </Layout>
  );
};

export default Home;
