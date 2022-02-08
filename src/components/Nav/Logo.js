import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return <LogoBox to="/">Logo</LogoBox>;
};

const LogoBox = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  padding-left: 2rem;
  color: orange;
`;

export default Logo;
