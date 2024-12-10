import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Loading from "./pages/Loading";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initial state is null, we will set it after the verification

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // Verifikasi token ke backend
      axios
        .get("http://localhost:8000/api/verify-token", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          // Jika token valid
          setIsAuthenticated(true);
          setIsLoading(false);
        })
        .catch((error) => {
          // Jika token tidak valid atau terjadi error
          setIsAuthenticated(false);
          setIsLoading(false);
        });
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />; // Menampilkan loading state selama pengecekan
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
