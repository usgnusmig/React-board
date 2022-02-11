import styled from "styled-components";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <TodoLayout>
      <h2>간단한 투두 리스트</h2>
      <TodoList />
      <TodoInputForm />
    </TodoLayout>
  );
};

const TodoLayout = styled.div`
  border: 1px solid orange;
  border-radius: 15px;
  width: 25rem;
  margin: auto;
  padding-bottom: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: orange;
  }
`;

export default Todo;
