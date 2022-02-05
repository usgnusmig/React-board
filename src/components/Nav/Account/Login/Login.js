import { useContext } from "react";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";

import { AuthContext } from "../../../../context/AuthContext";
import { signOut } from "@firebase/auth";
import { auth } from "../../../../firebase";

const Login = () => {
  //로그인 기능 root component

  const { isLogin, setIsLogin, onLoginModal, setOnLoginModal } =
    useContext(AuthContext);

  const onLoginModalHandler = () => {
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

  const Login = <button onClick={onLoginModalHandler}>로그인</button>;
  const Logout = <button onClick={onLogoutHandler}>로그아웃</button>;

  return (
    <div>
      {!isLogin ? Login : Logout}

      {onLoginModal ? (
        // 로그인 버튼 누르면 로그인 모달창 팝업
        <LoginModal>
          {/* 모달 백그라운드 누르면 모달창 닫힘 로그인은 안됨*/}

          <LoginForm
          // 로그인 버튼 누르면 모달 닫힘과 동시에 로그인 됨
          />
        </LoginModal>
      ) : null}
    </div>
  );
};
export default Login;
