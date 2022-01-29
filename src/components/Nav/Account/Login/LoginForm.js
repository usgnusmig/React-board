import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";

const LoginForm = ({ isLogin, setIsLogin, onLoginModal, setOnLoginModal }) => {
  // Input Value
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // email, password 검사/ Login inverter
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [loginConfirm, setLoginConfirm] = useState(true);

  // email형식 검사
  // @와 .이 있는지 있다면 true / 지우면 다시 false
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);

    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailConfirm(true);
    }
    if (!e.target.value.includes("@") || !e.target.value.includes(".")) {
      setEmailConfirm(false);
    }
  };

  // password검사 8자리 이상 / 지우면 다시 false
  const onChangePassword = (e) => {
    setInputPassword(e.target.value);

    if (e.target.value.trim().length > 7) {
      setPasswordConfirm(true);
    }
    if (e.target.value.trim().length <= 7) {
      setPasswordConfirm(false);
    }
  };

  // email과 password 검사가 통과되면 로그인 버튼 활성화
  // 둘중 하나라도 false되면 다시 비활성화
  useEffect(() => {
    if (emailConfirm && passwordConfirm) {
      return setLoginConfirm(false);
    }
    if (!emailConfirm || !passwordConfirm) {
      return setLoginConfirm(true);
    }
  }, [emailConfirm, passwordConfirm]);

  // 로그인 버튼 누르면 작동
  // 로그인 상태가 되고 모달창은 닫힘
  const submitHandler = () => {
    setIsLogin(true);
    setOnLoginModal(false);
  };

  return (
    <LoginFormBox>
      <h1>게시판 로그인</h1>

      <label htmlFor="email">E-MAIL</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        value={inputEmail}
        onChange={onChangeEmail}
      />

      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        type="password"
        placeholder="암호를 입력해주세요"
        value={inputPassword}
        onChange={onChangePassword}
      />

      <ModalBtn type="submit" onClick={submitHandler} disabled={loginConfirm}>
        로그인
      </ModalBtn>
    </LoginFormBox>
  );
};

const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: orange;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1rem;
    margin-top: 2rem;
  }

  input {
    height: 1.5rem;
    border: none;
    border-bottom: 1px solid #ccc;

    &:focus {
      outline: none;
    }
  }
`;

const ModalBtn = styled.button`
  cursor: pointer;
  color: ${(props) => (props.disabled ? "#f5f5f5" : "orange")};
  margin-top: 2rem;
  padding: 1rem;
  border: none;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ffffff")};
  box-shadow: 1px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#f8f9fa")};
  }
`;

export default LoginForm;
