import styled from "styled-components";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";

const Home = () => {
  return (
    <Layout>
      {/* 네비게이션 바 */}
      <Nav />

      {/* 메인페이지 */}
      <Main />
    </Layout>
  );
};

const Layout = styled.div``;

export default Home;
