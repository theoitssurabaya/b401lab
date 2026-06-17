import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect bare root to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Language-prefixed landing page: /en and /id */}
        <Route path="/:lang" element={<LandingPage />} />

        {/* Fallback: redirect any unknown path to English */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
