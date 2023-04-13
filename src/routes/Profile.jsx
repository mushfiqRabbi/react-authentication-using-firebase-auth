import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { currentUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await signOutUser();
    if (response instanceof Error) {
      console.log(response.message);
      return;
    }
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="container col-md-6 my-5">
        <div className="card alert alert-info">
          <div className="card-body">
            <div className="card-title alert-heading">
              <h1>Profile</h1>
            </div>
            <hr />
            <div className="card-text">
              <h2>Welcome, {currentUser.email}</h2>
            </div>
          </div>
          <div className="container col-4">
            <button
              className="btn btn-outline-danger col-12"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
