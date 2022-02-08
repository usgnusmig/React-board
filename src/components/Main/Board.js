import React from "react";
import styled from "styled-components";

const Board = () => {
  return (
    <BoardBox>
      <h2>게시판</h2>
    </BoardBox>
  );
};

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

export default Board;
