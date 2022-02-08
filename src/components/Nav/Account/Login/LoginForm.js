import { useEffect, useState, useContext, useRef } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../../firebase";
import { AuthContext } from "../../../../context/AuthContext";

const LoginForm = () => {
  const { setIsLogin, setOnLoginModal } = useContext(AuthContext);

  // Input Value
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const inputRef = useRef();

  // email, password 검사/ Login inverter
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [loginConfirm, setLoginConfirm] = useState(true);

  // email 핸들링 / 형식 검사
  // @와 .이 있는지 있다면 true 아닐경우 false
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);

    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailConfirm(true);
    } else {
      setEmailConfirm(false);
    }
  };

  // password 핸들링 / 검사
  // 길이 8 이상이면 true 미만이면 false
  const onChangePassword = (e) => {
    setInputPassword(e.target.value);

    if (e.target.value.trim().length > 7) {
      setPasswordConfirm(true);
    } else {
      setPasswordConfirm(false);
    }
  };

  // email, password 검사가 통과되어야만 로그인 버튼 활성화
  useEffect(() => {
    if (emailConfirm && passwordConfirm) {
      return setLoginConfirm(false);
    } else {
      return setLoginConfirm(true);
    }
  }, [emailConfirm, passwordConfirm]);

  // 로그인 버튼 누르면 작동
  // 로그인 상태가 되고 모달창은 닫힘
  const submitHandler = () => {
    signInWithEmailAndPassword(auth, inputEmail, inputPassword)
      .then(() => {
        setIsLogin(true);
        setOnLoginModal(false);
      })
      .catch((e) => {
        alert("이메일 혹은 암호를 확인해주세요");
        inputRef.current.focus();
      });
  };

  return (
    <LoginFormBox>
      <h1>게시판 로그인</h1>

      <label htmlFor="email">E-MAIL</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        ref={inputRef}
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

      <LoginBtn type="submit" onClick={submitHandler} disabled={loginConfirm}>
        로그인
      </LoginBtn>
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

const LoginBtn = styled.button`
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
