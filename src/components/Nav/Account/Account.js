import React from "react";
import styled from "styled-components";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Account = ({ isLogin, setIsLogin, onLoginModal, setOnLoginModal }) => {
  //로그인 회원가입 리스트

  return (
    <AccountList>
      <Login
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        onLoginModal={onLoginModal}
        setOnLoginModal={setOnLoginModal}
      />

      <Signup />
    </AccountList>
  );
};

const AccountList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 1rem;
`;

export default Account;
