import React from "react";

// 버튼 재사용 컴포넌트
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
