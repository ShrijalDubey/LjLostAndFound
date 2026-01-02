import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ItemList from "./pages/ItemList";

export default function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleSetRole = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage setRole={handleSetRole} />}
        />

        <Route
          path="/items"
          element={
            role ? (
              <ItemList role={role} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
