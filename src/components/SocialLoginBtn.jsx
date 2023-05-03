import React from "react";

const SocialLoginBtn = ({ children, icon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn capitalize"
    >
      {icon}
      {children}
    </button>
  );
};

export default SocialLoginBtn;
