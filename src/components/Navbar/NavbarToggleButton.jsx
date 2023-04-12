import React from "react";

export default function NavbarToggleButton() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav-contents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
}
