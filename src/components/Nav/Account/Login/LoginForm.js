import React from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";

const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  h1 {
    text-align: center;
    color: orange;
    margin-bottom: 5rem;
  }

  label {
    font-size: 1rem;
  }

  input {
    height: 1.5rem;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 2rem;
  }
`;

const LoginForm = () => {
  return (
    <LoginFormBox>
      <h1>게시판 로그인</h1>

      <label>E-MAIL</label>
      <input />

      <label>PASSWORD</label>
      <input />

      <LoginButton />
    </LoginFormBox>
  );
};

export default LoginForm;
