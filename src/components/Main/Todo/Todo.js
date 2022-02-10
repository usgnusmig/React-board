import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../../context/TodoContext";

const Todo = () => {
  const { todoList, setTodoList } = useContext(TodoContext);

  console.log(todoList);
  return (
    <TodoLayout>
      <h2>간단한 투두 리스트</h2>
      <ul>
        <li>아이템 1</li>
        <li>아이템 2</li>
        <li>아이템 3</li>
      </ul>
      <div>
        <label>입력창</label>
        <input></input>
        <button>버튼</button>
      </div>
    </TodoLayout>
  );
};

const TodoLayout = styled.div`
  border: 1px solid #5c7cfa;
  border-radius: 15px;
  width: 25rem;
  margin: auto;
  padding-bottom: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #5c7cfa;
  }
  ul,
  li {
    padding: 0;
    list-style: none;
  }
`;

export default Todo;
