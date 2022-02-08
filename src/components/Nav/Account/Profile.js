import styled from "styled-components";
import { Fragment, useState, useContext, useEffect } from "react";
import { getAuth } from "@firebase/auth";
import { AuthContext } from "../../../context/AuthContext";

const Profile = () => {
  const { isLogin } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (isLogin) {
      const userName = user.email.slice(0, user.email.indexOf("@"));
      setDisplayName(userName);
    } else {
      setDisplayName("");
    }
  }, [isLogin]);

  return (
    <Fragment>
      {!isLogin ? null : <ProfileItem>{displayName}님 반갑습니다.</ProfileItem>}
    </Fragment>
  );
};

const ProfileItem = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: orange;
  padding: 0.2rem 0.5rem;
`;

export default Profile;
