import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
  padding: 2rem;
`;

const Main = (props) => {
  let Guest = <MainBox>로그인 후 이용해 주세요</MainBox>;

  return <div>{!props.isLogin ? Guest : <MainBox>메인 페이지</MainBox>}</div>;
};

export default Main;
