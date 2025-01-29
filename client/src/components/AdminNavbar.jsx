import React from "react";
import { useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname === "/admin" ? (
        <div>
          {/* Admin Navbar */}
          <a href="/admin/dashboard">Dashboard</a>
          <a href="/admin/settings">Settings</a>
          <a href="/admin/profile">Profile</a>
        </div>
      ) : (
        <div>
          {/* Default Navbar */}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
