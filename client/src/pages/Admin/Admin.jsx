import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("http://localhost:5173/login");
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Admin;
