import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated, isAdmin }) => {
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    // Redirect to home if not an admin
    return <Navigate to="/" />;
  }

  // Render the children if authenticated and isAdmin
  return children;
};

export default PrivateRoute;
