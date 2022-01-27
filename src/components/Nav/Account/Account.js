import React from "react";
import styled from "styled-components";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AccountList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 1rem;
`;

const Account = () => {
  return (
    <AccountList>
      <SignIn />
      <SignUp />
    </AccountList>
  );
};

export default Account;
