import { Fragment } from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Board from "./Main/Board";
import Todo from "./Main/Todo/Todo";
import { Route } from "react-router-dom";
import TodoProvider from "../provider/TodoProvider";

const Home = () => {
  return (
    <Fragment>
      {/* 네비게이션 바 */}
      <Nav />

      {/* 메인페이지 */}
      <MainBox>
        <Route path="/" component={Main} exact />
        <Route path="/Board" component={Board} />
        <TodoProvider>
          <Route path="/Todo" component={Todo} />
        </TodoProvider>
      </MainBox>
    </Fragment>
  );
};

const MainBox = styled.div`
  padding: 1rem;
`;

export default Home;
