import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("have user", currentUser);
      setUser(currentUser);
    });
    return unsubscribe();
  }, []);

  const userInfo = {
    SignUp,
    SignIn,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
