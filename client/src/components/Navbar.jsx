import React from "react";
import { Link } from "react-router-dom";
import BookNowButton from "./Booknowbutton.jsx"; // Import the BookNowButton component
import "./Navbar.scss"; // Import the SCSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link">
          MyLogo
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/service" className="navbar__link">
            Service
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            Contact
          </Link>
        </li>
        <li className="navbar__item">
          <BookNowButton /> {/* Add the BookNowButton here */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
