import { useContext } from "react";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import AccountBtn from "../AccountBtn";

import { AuthContext } from "../../../../context/AuthContext";

const Login = () => {
  //로그인 기능 root component

  const { onLoginModal, setOnLoginModal } = useContext(AuthContext);

  const onLoginModalHandler = () => {
    setOnLoginModal(true);
  };

  return (
    <div>
      <AccountBtn type="button" onClick={onLoginModalHandler}>
        로그인
      </AccountBtn>

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
