import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Board from "./Board";

let Guest = <div style={{ padding: "2rem" }}>로그인 후 이용해 주세요</div>;

const Main = () => {
  const { isLogin } = useContext(AuthContext);

  return <div>{!isLogin ? Guest : <Board />}</div>;
};

export default Main;
