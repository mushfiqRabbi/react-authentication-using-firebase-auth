import React from "react";
import auth from "../firebase.js";
import { signOut } from "firebase/auth";
signOut;

export default function Home() {
  const handleSignOut = async () => {
    try {
      const data = await signOut(auth);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn btn-danger" onClick={handleSignOut}>
        sign out
      </button>
    </>
  );
}
