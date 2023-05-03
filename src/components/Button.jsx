import React from "react";

const Button = ({children,handleClick}) => {
  return <button onClick={handleClick} className="btn bg-secondary">{children}</button>;
};

export default Button;
