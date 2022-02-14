import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../../context/TodoContext";

const TodoList = () => {
  const { todo } = useContext(TodoContext);

  return (
    <TodoLists>
      {todo &&
        todo.map((item) => {
          return <TodoItem key={item.id}>{item.text}</TodoItem>;
        })}
    </TodoLists>
  );
};

const TodoLists = styled.ul`
  box-sizing: border-box;
  width: 50%;
  margin: auto;
  list-style: none;
  padding: 0;
`;

export default TodoList;
