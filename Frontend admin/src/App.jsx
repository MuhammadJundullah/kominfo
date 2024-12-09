import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DataStaff from "./pages/DataStaff";
import TambahInformasiPublik from "./pages/TambahInformasiPublik";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk Dashboard */}
        <Route
          path="/informasi-publik"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Route untuk Informasi Publik */}
        <Route
          path="/data-staff"
          element={
            <ProtectedRoute>
              <DataStaff />
            </ProtectedRoute>
          }
        />

        {/* Route untuk Informasi Publik */}
        <Route
          path="/informasi-publik/tambah"
          element={
            <ProtectedRoute>
              <TambahInformasiPublik />
            </ProtectedRoute>
          }
        />

        {/* Route untuk halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Route untuk halaman Login */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
