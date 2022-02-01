import { useEffect, useState } from "react";
import { User } from "@firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscripbe = auth.onAuthStateChanged((fbUser) => {
      console.log(`로그인 실행 `, fbUser);
      setUser(fbUser);
    });
    return subscripbe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
