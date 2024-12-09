import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DataStaff from "./pages/DataStaff";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk Dashboard */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Route untuk Informasi Publik */}
        <Route
          path="/informasi-publik"
          element={
            <ProtectedRoute>
              <DataStaff />
            </ProtectedRoute>
          }
        />

        {/* Route untuk halaman Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
