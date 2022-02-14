import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";

const TodoItem = ({ item }) => {
  const { todo, setTodo } = useContext(TodoContext);

  const isCompletedHandler = () => {
    const newTodo = todo.map((prev) => ({
      ...prev,
      isCompleted: prev.id === item.id ? !prev.isCompleted : prev.isCompleted,
    }));

    setTodo(newTodo);

    console.log(item.isCompleted);
  };

  const delHandler = (e) => {
    e.preventDefault();
    const newTodo = todo.map((prev) => ({
      ...prev,
      isDel: item.id === prev.id ? !item.isDel : item.isDel,
    }));

    setTodo(newTodo);

    console.log(item.isDel);
  };

  return (
    <TodoItems>
      <input type="checkbox" onClick={isCompletedHandler} />
      <span>{item.text}</span>
      {item.isCompleted && (
        <DelBtn
          type="button"
          onClick={delHandler}
          style={{ color: "orange" }}
        />
      )}
    </TodoItems>
  );
};

const TodoItems = styled.li`
  border-bottom: 1px solid #dee2e6;
  width: 87%;
  margin: 0.5rem 0;
  :last-child {
    margin-bottom: 0;
  }
`;

const DelBtn = styled(BsTrashFill)`
  float: right;
  left: 0;
  color: orange;
`;

export default TodoItem;
