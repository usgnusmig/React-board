import React from "react";
import { useState, useContext, useRef } from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { TodoContext } from "../../../context/TodoContext";

const TodoInputForm = () => {
  const [inputText, setInputtext] = useState("");

  const { todo, setTodo } = useContext(TodoContext);

  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const nextTodo = todo.concat({
      id: Math.random(),
      text: inputText,
    });

    setTodo(nextTodo);
    setInputtext("");

    inputRef.current.focus();
    console.log(todo);
  };

  const inputChangeHandler = (e) => {
    setInputtext(e.target.value);
  };

  return (
    <TodoInputFormBox onSubmit={submitHandler}>
      <input
        id="input"
        type="text"
        placeholder="할 일을 추가해주세요"
        onChange={inputChangeHandler}
        ref={inputRef}
        value={inputText}
      />

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
