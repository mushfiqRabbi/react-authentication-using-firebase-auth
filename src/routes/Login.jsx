import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signInUser } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("placeholder message here");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await signInUser(
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
      <div className="container col-md-6 my-5">
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
              <h1>Sign In</h1>
            </div>
            <form onSubmit={handleSignIn}>
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
              <div className="container mt-4">
                <button className="btn btn-primary col-12">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
