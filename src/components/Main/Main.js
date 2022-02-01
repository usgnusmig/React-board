import React from "react";

import Board from "./Board";

let Guest = <div style={{ padding: "2rem" }}>로그인 후 이용해 주세요</div>;

const Main = (props) => {
  return <div>{!props.isLogin ? Guest : <Board />}</div>;
};

export default Main;
