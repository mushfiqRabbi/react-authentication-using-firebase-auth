import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase.js";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const createUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return await error;
    }
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, createUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
