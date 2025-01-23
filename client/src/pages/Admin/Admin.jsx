import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:5070/logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
