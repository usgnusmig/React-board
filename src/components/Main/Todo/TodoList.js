import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../../context/TodoContext";
import { FaArrowAltCircleDown } from "react-icons/fa";

const TodoList = ({ title, checked }) => {
  const { todo } = useContext(TodoContext);

  const hideHandler = () => {};

  return (
    <TodoLists>
      <ToggleItem>
        <h3>{title}</h3>
        {checked && <HideBtnItem type="button" onClick={hideHandler} />}
      </ToggleItem>
      {todo &&
        todo.map((item) => {
          if (checked !== item.isCompleted) return null;

          return <TodoItem key={item.id} item={item} />;
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
const ToggleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HideBtnItem = styled(FaArrowAltCircleDown)`
  color: orange;
`;

export default TodoList;
