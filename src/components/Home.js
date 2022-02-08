import styled from "styled-components";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Board from "./Main/Board";
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      {/* 네비게이션 바 */}
      <Nav />

      {/* 메인페이지 */}

      <Route path="/" component={Main} exact />
      <Route path="/Board" component={Board} />
    </Layout>
  );
};

const Layout = styled.div``;

export default Home;
