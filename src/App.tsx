import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TracksPage from "./pages/TracksPage";
import DatesPage from "./pages/DatesPage";
import SpeakersPage from "./pages/SpeakersPage";
import VenuePage from "./pages/VenuePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/dates" element={<DatesPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/venue" element={<VenuePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
