import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

const TodoInputForm = () => {
  return (
    <TodoInputFormBox>
      <input />

      <button type="submit">
        <FaPlusCircle />
      </button>
    </TodoInputFormBox>
  );
};

const TodoInputFormBox = styled.form`
  display: flex;
  width: 50%;
  gap: 0.5rem;
  padding-top: 1rem;

  input {
    border: none;
    border-bottom: 1px solid orange;
    :focus {
      outline: none;
    }
  }

  button {
    border: none;
    background: none;
    font-size: 1.2rem;
    color: orange;
    cursor: pointer;
  }
`;

export default TodoInputForm;
