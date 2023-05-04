import React from "react";

const Button = ({children,handleClick}) => {
  return <button onClick={handleClick} className="btn bg-secondary btn-sm lg:btn-md">{children}</button>;
};

export default Button;
