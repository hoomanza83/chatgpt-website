import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023 [Your Website or Company Name]</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </nav>
      <p className="term-privacy">
        <Link href="#">Privacy Policy</Link> |{" "}
        <Link href="#">Terms of Use</Link>
      </p>
    </footer>
  );
};

export default Footer;
