import React from "react";
import styled from "styled-components";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const AccountList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 1rem;
`;

const Account = ({ isLogin, setIsLogin, onLoginModal, setOnLoginModal }) => {
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

export default Account;
