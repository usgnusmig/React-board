import { useContext, useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../../firebase";
import { AuthContext } from "../../../../context/AuthContext";

const SignupForm = () => {
  const { setOnSignupModal } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const passwordRef = useRef();

  const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  const onSubmithandle = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
      alert("가입이 완료되었습니다");
      setOnSignupModal(false);
    });
  };

  const onError = (error) => {
    if (error.email) {
      alert("이메일 형식을 확인해주세요");
    }
    if (error.password) {
      alert("암호를 8자 이상 입력해주세요");
    }
  };

  return (
    <SignupFormBox onSubmit={handleSubmit(onSubmithandle, onError)}>
      <h1>게시판 회원가입</h1>

      <label>이메일</label>
      <input
        id="email"
        type="text"
        placeholder="이메일을 입력해주세요"
        {...register("email", {
          pattern: emailTest,
        })}
      />

      <label>비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="암호를 8자 이상 입력해주세요"
        ref={passwordRef}
        {...register("password", {
          minLength: 8,
          message: "password",
        })}
      />

      <SignupBtn type="submit">회원가입</SignupBtn>
    </SignupFormBox>
  );
};

const SignupFormBox = styled.form`
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

const SignupBtn = styled.button`
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

export default SignupForm;
