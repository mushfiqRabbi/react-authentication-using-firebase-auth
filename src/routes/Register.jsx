import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { signUpUser } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("placeholder message here");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setMsg("passwords do not match !");
      setShowAlert(true);
      return;
    }
    const response = await signUpUser(
      email.current.value,
      password.current.value
    );
    if (response instanceof Error) {
      setMsg(response.message);
      setShowAlert(true);
      return;
    }
    navigate("/profile", { replace: true });
  };

  const handClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="container col-md-6 my-5 my-md-0">
        <div
          className={`alert alert-danger alert-dismissible fade ${
            showAlert ? "show" : "hide"
          }`}
        >
          <div>{msg}</div>
          <button className="btn btn-close" onClick={handClose}></button>
        </div>
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
