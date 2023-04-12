import React, { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUser(email.current.value, password.current.value);
  };

  return (
    <>
      <div className="container col-md-6 my-5">
        <div className="card w-100">
          <div className="card-body">
            <div className="card-title text-center">
              <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  ref={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  ref={password}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="re_password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="re_password"
                  className="form-control"
                  ref={confirmPassword}
                />
              </div>
              <div className="container mt-4">
                <button className="btn btn-primary col-12">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
