import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarLink({ to }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`nav-link text-capitalize ${
        location.pathname === to ? "active" : ""
      }`}
    >
      {to.slice(1)}
    </Link>
  );
}
