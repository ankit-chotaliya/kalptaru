import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRouteAdmin = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };
export default PrivateRouteAdmin