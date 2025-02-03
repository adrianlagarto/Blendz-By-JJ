import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.scss"; // Import the SCSS file

const Admin = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/logout"); // Navigate to the Logout page
  };

  return (
    <div className="adminContainer">
      <h1>Admin Page</h1>
      <button className="logoutButton" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Admin;
