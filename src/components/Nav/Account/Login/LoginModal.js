import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverayStyle = styled.div`
  position: fixed;
  top: 10rem;
  background-color: #ffffff;
  width: 60%;
  height: 20rem;
  left: 10%;
  padding: 1rem;
  border-radius: 10px;
  z-index: 20;
  animation: ${SlideDown} 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 30rem;
    left: calc(50% - 20rem);
  }
`;

const LoginModal = (props) => {
  const ID = document.getElementById("modal");

  return (
    <Fragment>
      {createPortal(<BackdropStyle />, ID)}
      {createPortal(<ModalOverayStyle>{props.children}</ModalOverayStyle>, ID)}
    </Fragment>
  );
};

export default LoginModal;
