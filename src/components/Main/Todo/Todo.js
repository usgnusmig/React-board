import styled from "styled-components";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <TodoLayout>
      <h2>간단한 투두 리스트</h2>
      <TodoInputForm />
      <hr />
      <TodoList title={"할 일"} checked={false} />
      <TodoList title={"완료된 항목"} checked={true} />
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

  h2,
  h3 {
    color: orange;
  }
`;

export default Todo;
