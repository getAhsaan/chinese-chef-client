import React, { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app);

  // provider
  const googleProvider = new GoogleAuthProvider();

  // create new user with google
  const createNewUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // auth info
  const authInfo = {
    user,
    createNewUserWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
