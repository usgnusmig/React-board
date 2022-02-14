import styled from "styled-components";

const TodoItem = ({ children }) => {
  return <TodoItems>{children}</TodoItems>;
};

const TodoItems = styled.li`
  padding-bottom: 0.5rem;
  :last-child {
    padding: 0;
  }
`;

export default TodoItem;
