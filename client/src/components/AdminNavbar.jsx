import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"; // Import the same SCSS file for styling

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link
          to="/admin/dashboard"
          className="navbar__link"
          aria-label="Dashboard"
        >
          <i className="fas fa-tools"></i> Admin Dashboard
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link
            to="/admin/dashboard"
            className="navbar__link"
            aria-label="Dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/admin/settings"
            className="navbar__link"
            aria-label="Settings"
          >
            Settings
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/admin/profile"
            className="navbar__link"
            aria-label="Profile"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
