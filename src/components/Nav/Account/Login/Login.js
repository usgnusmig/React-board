import React from "react";
import LoginForm from "./LoginForm";
import Button from "./Button";
import LoginModal from "./LoginModal";
import { signOut } from "@firebase/auth";
import { auth } from "../../../../firebase";

const Login = ({ isLogin, setIsLogin, onLoginModal, setOnLoginModal }) => {
  //로그인 기능 root component

  const onModalHandler = () => {
    setOnLoginModal(true);
  };

  const onLogoutHandler = () => {
    setIsLogin(false);
    signOut(auth)
      .then(() => {
        alert("로그아웃");
      })
      .catch((e) => alert(e));
  };

  const Login = <Button onClick={onModalHandler}>로그인</Button>;
  const Logout = <Button onClick={onLogoutHandler}>로그아웃</Button>;

  return (
    <div>
      {!isLogin ? Login : Logout}

      {onLoginModal ? (
        // 로그인 버튼 누르면 로그인 모달창 팝업
        <LoginModal setOnLoginModal={setOnLoginModal}>
          {/* 모달 백그라운드 누르면 모달창 닫힘 로그인은 안됨*/}

          <LoginForm
            // 로그인 버튼 누르면 모달 닫힘과 동시에 로그인 됨
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            onLoginModal={onLoginModal}
            setOnLoginModal={setOnLoginModal}
          />
        </LoginModal>
      ) : null}
    </div>
  );
};
export default Login;
