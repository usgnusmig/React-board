import { Fragment, useContext } from "react";
import styled from "styled-components";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";

import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import { signOut } from "@firebase/auth";

const Account = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  //로그인 회원가입 리스트

  const onLogoutHandler = () => {
    setIsLogin(false);
    signOut(auth)
      .then(() => {
        alert("로그아웃");
      })
      .catch((e) => console.log(e));
  };
  return (
    <AccountList>
      {isLogin ? (
        <button onClick={onLogoutHandler}>로그아웃</button>
      ) : (
        <Fragment>
          <Login />

          <Signup />
        </Fragment>
      )}
    </AccountList>
  );
};

const AccountList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 1rem;
`;

export default Account;
