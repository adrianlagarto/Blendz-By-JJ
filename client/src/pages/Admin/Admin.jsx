import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/check_session", {
          credentials: "include", // Include cookies
        });
        if (response.ok) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setIsAdmin(data.is_admin);
          } else {
            console.error("Expected JSON, but got:", contentType);
            navigate("/login");
          }
        } else {
          console.error("Server responded with status:", response.status);
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking session:", error);
        navigate("/login");
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/login");
  };

  return (
    <div className="adminContainer">
      <h1>Admin Page</h1>
      {isAdmin && <p>Welcome, Admin!</p>}
      <button className="logoutButton" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Admin;
