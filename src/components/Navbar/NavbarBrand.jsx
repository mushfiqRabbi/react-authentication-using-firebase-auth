import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarBrand() {
  const location = useLocation();

  return (
    <>
      <Link
        to={`/${location.pathname}`}
        className="navbar-brand text-capitalize d-md-none"
      >
        {location.pathname.slice(1)}
      </Link>
    </>
  );
}
