import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  // create user with email and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in new user with email and password
  const loginNewUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // auth info
  const authInfo = {
    user,
    createNewUserWithGoogle,
    createNewUserWithGithub,
    createNewUser,
    loginNewUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
