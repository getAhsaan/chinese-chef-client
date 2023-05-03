import React from "react";

const SocialLoginBtn = ({ children, icon }) => {
  return (
    <button className="btn capitalize">
      {icon}
      {children}
    </button>
  );
};

export default SocialLoginBtn;
