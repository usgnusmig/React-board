import { useContext } from "react";
import SignupModal from "./SingupModal";
import SignupForm from "./SignupForm";
import AccountBtn from "../AccountBtn";

import { AuthContext } from "../../../../context/AuthContext";

const Signup = () => {
  const { onSignupModal, setOnSignupModal } = useContext(AuthContext);

  const onSignupHandler = () => {
    setOnSignupModal(true);
  };

  return (
    <div>
      <div>
        <AccountBtn type="button" onClick={onSignupHandler}>
          {/* 회원가입 버튼 누르면 모달 창 팝업 */}
          회원가입
        </AccountBtn>

        {onSignupModal ? (
          <SignupModal>
            <SignupForm />
          </SignupModal>
        ) : null}
      </div>
    </div>
  );
};

export default Signup;
