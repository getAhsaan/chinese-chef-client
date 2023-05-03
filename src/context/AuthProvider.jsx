import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // log Out
  const logOut = () => {
    return signOut(auth);
  };

  // auth info
  const authInfo = {
    user,
    createNewUserWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
