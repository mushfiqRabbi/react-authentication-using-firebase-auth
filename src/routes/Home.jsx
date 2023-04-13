import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = async () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogOut = async () => {
    const response = await signOutUser();
    if (response instanceof Error) {
      console.log(response.message);
      return;
    }
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="container col-md-6 my-5 text-center">
        <div className="card alert alert-primary">
          <div className="card-body">
            <h1 className="card-title alert-heading">Welcome !</h1>
            <hr />
            <p className="card-text">
              This is simple demo user authentication system build using{" "}
              <a href="https://react.dev/" className="alert-link">
                react.js
              </a>{" "}
              and{" "}
              <a
                href="https://firebase.google.com/docs/auth/web/start"
                className="alert-link"
              >
                google firebase authentication
              </a>
              .
            </p>
          </div>
        </div>
        <div className="container my-4">
          {currentUser ? (
            <button className="btn btn-danger ms-4" onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <div>
              <button className="btn btn-primary" onClick={handleLogIn}>
                Login
              </button>
              <button className="btn btn-primary ms-4" onClick={handleRegister}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
