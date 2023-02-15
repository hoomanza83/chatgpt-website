import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="toggle-button" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            height="2rem"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <ul className={`menu-absolute ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
