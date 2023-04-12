import React from "react";
import NavbarLink from "./NavbarLink";

export default function NavbarLinks() {
  return (
    <>
      <div className="collapse navbar-collapse" id="nav-contents">
        <ul className="navbar-nav col-md-12">
          <li className="nav-item me-md-auto">
            <NavbarLink to="/home" />
          </li>
          <li className="nav-item">
            <NavbarLink to="/profile" />
          </li>
          <li className="nav-item">
            <NavbarLink to="/login" />
          </li>
          <li className="nav-item">
            <NavbarLink to="/register" />
          </li>
        </ul>
      </div>
    </>
  );
}
