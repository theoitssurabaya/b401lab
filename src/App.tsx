import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { WelcomeScreen } from "./components/WelcomeScreen";

export function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <>
      {!hasEntered && <WelcomeScreen onEnter={handleEnter} />}
      
      <div className={!hasEntered ? "h-screen overflow-hidden" : ""}>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              {/* Redirect bare root to English */}
              <Route path="/" element={<Navigate to="/en" replace />} />

              {/* Language-prefixed landing page: /en, /en/about, etc. */}
              <Route path="/:lang/:section?" element={<LandingPage />} />

              {/* Fallback: redirect any unknown path to English */}
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </div>
    </>
  );
}

export default App;
