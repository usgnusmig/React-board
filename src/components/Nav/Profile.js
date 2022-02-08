import styled from "styled-components";
import { Fragment, useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAuth } from "@firebase/auth";
import { CgProfile } from "react-icons/cg";

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
      {!isLogin ? (
        <IconItem>
          <CgProfile />
        </IconItem>
      ) : (
        <ProfileItem>{displayName}님 반갑습니다.</ProfileItem>
      )}
    </Fragment>
  );
};

const ProfileItem = styled.div`
  font-size: 1.1rem;
  font-weight: bold;

  color: orange;
`;

const IconItem = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  color: orange;
`;

export default Profile;
