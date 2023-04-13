import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase.js";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return error;
    }
  };

  const signInUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return await error;
    }
  };

  const signOutUser = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      return await error;
    }
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ currentUser, loading, signUpUser, signInUser, signOutUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
