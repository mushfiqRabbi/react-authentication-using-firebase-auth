import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarToggleButton from "./NavbarToggleButton";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <NavbarBrand />
          <NavbarToggleButton />
          <NavbarLinks />
        </div>
      </nav>
    </>
  );
}
