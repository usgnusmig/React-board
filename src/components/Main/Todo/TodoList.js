import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../../context/TodoContext";

const TodoList = () => {
  const { todo } = useContext(TodoContext);

  let TodoListMap = todo.map((item) => {
    <TodoItem>{item}</TodoItem>;
  });
  return <TodoLists>{TodoListMap}</TodoLists>;
};

const TodoLists = styled.ul`
  box-sizing: border-box;
  width: 50%;
  margin: auto;
  list-style: none;
  padding: 0;
`;

export default TodoList;
