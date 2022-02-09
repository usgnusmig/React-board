import { Fragment } from "react";
import styled from "styled-components";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Board from "./Main/Board";
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      {/* 네비게이션 바 */}
      <Nav />

      {/* 메인페이지 */}
      <MainBox>
        <Route path="/" component={Main} exact />
        <Route path="/Board" component={Board} />
      </MainBox>
    </Fragment>
  );
};

const MainBox = styled.div`
  padding: 1rem;
`;

export default Home;
