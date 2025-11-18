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
import Registration from "./components/Registration";
import City from "./pages/City";
import Organizers from "./pages/Organizers";
import MainVenue from "./components/Venue";
import FAQ from "./components/Faq";
import ClickSpark from "./components/ClickSpark";

function App() {
  return (
    <ClickSpark
      sparkColor="#2563eb"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Router>
        <Routes>
          <Route
            path="/2025/*"
            element={
              <iframe
                src="https://graceful-otter-699530.netlify.app/"
                style={{ width: "100%", height: "100vh", border: "none" }}
              />
            }
          />

          <Route
            path="/*"
            element={
              <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/tracks" element={<TracksPage />} />
                    <Route path="/dates" element={<DatesPage />} />
                    <Route path="/speakers" element={<SpeakersPage />} />
                    <Route path="/contact" element={<VenuePage />} />
                    <Route path="/registrations" element={<Registration />} />
                    <Route path="/locale/about-city" element={<City />} />
                    <Route
                      path="/committee/oragnizers"
                      element={<Organizers />}
                    />
                    <Route path="/venue" element={<MainVenue />} />
                    <Route path="/faq" element={<FAQ />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </ClickSpark>
  );
}

export default App;
