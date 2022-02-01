import React from "react";
import styled from "styled-components";

const BoardBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  input {
    width: 30rem;
  }

  button {
    width: 30rem;
  }
`;

const Board = () => {
  return (
    <BoardBox>
      로그인 완료됬습니다.
      <h2>게시판</h2>
    </BoardBox>
  );
};

export default Board;
