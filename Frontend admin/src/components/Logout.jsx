import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // (Opsional) Request logout ke API Laravel
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        await axios.post(
          "http://127.0.0.1:8000/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      }

      // Hapus token dari localStorage
      localStorage.removeItem("authToken");

      // Redirect ke halaman login
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
