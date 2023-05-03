import React, { createContext } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user
  const user = null;

  // auth info
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
