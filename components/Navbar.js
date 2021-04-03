import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className="nav bg-light d-flex justify-content-between">
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>
      <Link href="/login">
        <a className="nav-link">Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
