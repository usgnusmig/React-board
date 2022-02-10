import styled from "styled-components";
import { Link } from "react-router-dom";

const PageList = () => {
  return (
    <PageListBox>
      <PageListItems to="/">Main</PageListItems>
      <PageListItems to="/Board">Board</PageListItems>
      <PageListItems to="/Todo">Todo</PageListItems>
    </PageListBox>
  );
};

const PageListBox = styled.ul`
  list-style: none;

  display: flex;
  gap: 1rem;

  font-size: 1rem;
  font-weight: bold;
  background-color: #ffffff;
  color: orange;
  border-radius: 12px;
  padding: 0.2rem 0.5rem;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
`;

const PageListItems = styled(Link)`
  text-decoration: none;
  color: orange;
  font-size: 1.1rem;
`;

export default PageList;
