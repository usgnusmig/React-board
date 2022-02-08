import { Fragment, useContext } from "react";
import styled from "styled-components";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import AccountBtn from "./AccountBtn";

import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import { signOut } from "@firebase/auth";

const Account = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  //로그인 회원가입 리스트

  const onLogoutHandler = () => {
    // 로그아웃 핸들러
    setIsLogin(false);
    signOut(auth)
      .then(() => {
        console.log("로그아웃");
      })
      .catch((e) => console.log(e));
  };

  return (
    <AccountList>
      {isLogin ? (
        <Fragment>
          <AccountBtn type="button" onClick={onLogoutHandler}>
            로그아웃
          </AccountBtn>
        </Fragment>
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
