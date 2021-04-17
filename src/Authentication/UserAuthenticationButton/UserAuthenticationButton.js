import React from "react";

const UserAuthenticationButton = (props) => {
  return (
    <button
      className={`button ${props.optionalClass}`}
      onClick={() => props.handleClick()}
    >
      {props.label}
    </button>
  );
};

export default UserAuthenticationButton;
