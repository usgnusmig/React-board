import React from "react";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";

const Login = ({ isLogin, setIsLogin, onLoginModal, setOnLoginModal }) => {
  const onModalHandler = () => {
    setOnLoginModal(true);
  };

  const onLogoutHandler = () => {
    setIsLogin(false);
  };

  const Login = <button onClick={onModalHandler}>로그인</button>;
  const signOut = <button onClick={onLogoutHandler}>로그아웃</button>;

  return (
    <div>
      {!isLogin ? Login : signOut}
      {onLoginModal ? (
        <LoginModal>
          <LoginForm />
        </LoginModal>
      ) : null}
    </div>
  );
};
export default Login;
