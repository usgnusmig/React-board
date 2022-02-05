import { useEffect, useState } from "react";
// import { User } from "@firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [onLoginModal, setOnLoginModal] = useState(false);
  const [onSignupModal, setOnSignupModal] = useState(false);

  useEffect(() => {
    const subscripbe = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return subscripbe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        setIsLogin,
        onLoginModal,
        setOnLoginModal,
        onSignupModal,
        setOnSignupModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
