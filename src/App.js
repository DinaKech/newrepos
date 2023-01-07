import React, { useContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Account from "./components/Account";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import { UserContext } from "./context/AuthContext";
export default function App() {
  return (
    <div>
      <h1>Firebase & Router</h1>
      <UserContext>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext>
    </div>
  );
}
