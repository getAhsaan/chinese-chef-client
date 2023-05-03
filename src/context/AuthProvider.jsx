import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
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
  const githubProvider = new GithubAuthProvider();

  // create new user with google
  const createNewUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // create new user with github
  const createNewUserWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
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
    createNewUserWithGithub,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
