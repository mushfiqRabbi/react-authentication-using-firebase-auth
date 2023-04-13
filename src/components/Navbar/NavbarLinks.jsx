import React from "react";
import NavbarLink from "./NavbarLink";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavbarLinks() {
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
      <div className="collapse navbar-collapse" id="nav-contents">
        <ul className="navbar-nav col-md-12">
          <li className="nav-item me-md-auto">
            <NavbarLink to="/home" />
          </li>
          {currentUser ? (
            <li className="nav-item">
              <NavbarLink to="/profile" />
            </li>
          ) : (
            ""
          )}{" "}
          {currentUser ? (
            ""
          ) : (
            <li className="nav-item">
              <NavbarLink to="/login" />
            </li>
          )}
          {currentUser ? (
            ""
          ) : (
            <li className="nav-item">
              <NavbarLink to="/register" />
            </li>
          )}
          {currentUser ? (
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>
                logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
}
