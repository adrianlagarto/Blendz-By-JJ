import React from "react";
import { Link } from "react-router-dom";
import BookNowButton from "./BookNowButton"; // Import the BookNowButton component
import "./Navbar.scss"; // Import the SCSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link" aria-label="Home">
          <i className="fas fa-cut"></i> BarberShop
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <Link to="/" className="navbar__menu__item__link" aria-label="Home">
            Home
          </Link>
        </li>
        <li className="navbar__menu__item">
          <Link
            to="/about"
            className="navbar__menu__item__link"
            aria-label="About"
          >
            About
          </Link>
        </li>
        <li className="navbar__menu__item">
          <Link
            to="/services"
            className="navbar__menu__item__link"
            aria-label="Services"
          >
            Services
          </Link>
        </li>
        <li className="navbar__menu__item">
          <Link
            to="/contact"
            className="navbar__menu__item__link"
            aria-label="Contact"
          >
            Contact
          </Link>
        </li>
        <li className="navbar__menu__item">
          <BookNowButton /> {/* Add the BookNowButton here */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
