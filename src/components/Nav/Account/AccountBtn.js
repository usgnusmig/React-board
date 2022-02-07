import styled from "styled-components";

const AccountBtn = (props) => {
  return (
    <AccountBtnItem type={props.type} onClick={props.onClick}>
      {props.children}
    </AccountBtnItem>
  );
};

const AccountBtnItem = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background-color: #ffffff;
  color: orange;
  border-radius: 12px;
  border: none;
  padding: 0.2rem 0.5rem;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    color: orangered;
    opacity: 0.5;
  }
`;

export default AccountBtn;
