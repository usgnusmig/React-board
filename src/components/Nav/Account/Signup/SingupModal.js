import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { AuthContext } from "../../../../context/AuthContext";

const SingupModal = ({ children }) => {
  const { setOnSignupModal } = useContext(AuthContext);

  const clickHandler = () => {
    // 백드롭 클릭시 모달 닫힘
    setOnSignupModal(false);
  };

  const SIGNUP_ID = document.getElementById("signupModal");

  return (
    <Fragment>
      {createPortal(<BackdropStyle onClick={clickHandler} />, SIGNUP_ID)}
      {createPortal(<ModalOverayStyle>{children}</ModalOverayStyle>, SIGNUP_ID)}
    </Fragment>
  );
};

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

export default SingupModal;
