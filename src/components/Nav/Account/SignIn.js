import React from "react";

const SignIn = ({ isLogin, setIsLogin }) => {
  const loginHandler = () => {
    setIsLogin((current) => !current);
  };

  const signIn = <button onClick={loginHandler}>로그인</button>;
  const signOut = <button onClick={loginHandler}>로그아웃</button>;

  return <div>{!isLogin ? signIn : signOut}</div>;
};
export default SignIn;
