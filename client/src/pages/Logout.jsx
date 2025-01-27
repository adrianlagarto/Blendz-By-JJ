import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>You have been logged out</h1>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </div>
  );
};

export default Logout;
