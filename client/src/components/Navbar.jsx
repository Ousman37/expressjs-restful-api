import React from "react";
import "../style/Navbar.css"; 

const Navbar = () => {
  return (
    <header className="navbar-header">
      <h1 className="navbar-logo">BrukerAdmin</h1>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Hjem</a>
          </li>
          <li>
            <a href="/brukere">Brukere</a>
          </li>
          <li>
            <a href="/om">Om Oss</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
