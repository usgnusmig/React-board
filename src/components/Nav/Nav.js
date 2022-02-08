import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Account from "./Account/Account";
import Profile from "./Profile";

const Nav = () => {
  //상단 네비게이션
  return (
    <NavRow>
      <Logo />
      <Profile />
      <Account />
    </NavRow>
  );
};

const NavRow = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
`;

export default Nav;
