import React, { useState } from "react";
import styled from "styled-components";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";

const Layout = styled.div``;

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [onLoginModal, setOnLoginModal] = useState(false);

  return (
    <Layout>
      {/* 네비게이션 바 */}
      <Nav
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        onLoginModal={onLoginModal}
        setOnLoginModal={setOnLoginModal}
      />

      {/* 메인페이지 */}
      <Main
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        onLoginModal={onLoginModal}
        setOnLoginModal={setOnLoginModal}
      />
    </Layout>
  );
};

export default Home;
