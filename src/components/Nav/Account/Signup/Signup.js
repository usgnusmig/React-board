import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { AuthContext } from "../../../../context/AuthContext";
import { auth } from "../../../../firebase";

const Signup = () => {
  const userInfo = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreate, setIsCreate] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const createHandler = (e) => {
    e.preventDefault();
    setIsCreate((current) => !current);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("회원가입 성공");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const inputForm = (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={emailHandler}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={passwordHandler}
      />
      <button type="submit">가입</button>
    </div>
  );

  return (
    <div>
      <form onSubmit={submitHandler}>
        {isCreate ? (
          inputForm
        ) : (
          <button type="button" onClick={createHandler}>
            회원가입
          </button>
        )}
      </form>
    </div>
  );
};

export default Signup;
