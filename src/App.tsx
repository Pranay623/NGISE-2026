
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
import CallForPapersPage from "./pages/CallForPapersPage";
import TechnicalOrgannizers from "./pages/TechnicalOrgannizers";
import NearByCity from "./pages/NearByCity";
import VisaInformation from "./pages/Visa";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Panel from "./pages/Panel";
import BestPaperAward from "./pages/BestPaperAward";
import IndustrialSpeaker from "./pages/IndustrialSpeaker";
import StudentBestPaperAward from "./pages/StudentBestPaperAward";
import Tutorial from "./pages/Tutorial";
import ConferenceDinner from "./pages/ConferenceDinner";
import History from "./pages/ngise/History";
import Statutes from "./pages/ngise/Statutes";
import PreviousEditions from "./pages/ngise/PreviousEditions";
import FutureEditions from "./pages/ngise/FutureEditions";
import HallOfFame from "./pages/ngise/HallOfFame";




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
        <ScrollToTop />
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
                    <Route path="/call-for-papers" element={<CallForPapersPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/tracks" element={<TracksPage />} />
                    <Route path="/dates" element={<DatesPage />} />
                    <Route path="/speakers" element={<SpeakersPage />} />
                    <Route path="/programme/keynote-speakers" element={<KeynoteSpeakers />} />
                    <Route path="/programme/industrial-speaker" element={<IndustrialSpeaker />} />
                    <Route path="/programme/panel" element={<Panel />} />
                    <Route path="/programme/tutorial" element={<Tutorial />} />
                    <Route path="/programme/conference-dinner" element={<ConferenceDinner />} />
                    <Route path="/programme/best-paper-award" element={<BestPaperAward />} />

                    <Route path="/programme/student-best-paper-award" element={<StudentBestPaperAward />} />
                    <Route path="/contact" element={<VenuePage />} />
                    <Route path="/registrations" element={<Registration />} />
                    <Route path="/locale/about-city" element={<City />} />
                    <Route path="/locale/hotels" element={<NearByCity />} />
                    <Route path="/locale/visa" element={<VisaInformation />} />
                    <Route path="/ngise/history" element={<History />} />
                    <Route path="/ngise/statutes" element={<Statutes />} />
                    <Route path="/ngise/previous-editions" element={<PreviousEditions />} />
                    <Route path="/ngise/future-editions" element={<FutureEditions />} />
                    <Route path="/ngise/hall-of-fame" element={<HallOfFame />} />


                    <Route
                      path="/committee/organizers"
                      element={<Organizers />}
                    />
                    <Route
                      path="/committee/programme-committee"
                      element={<TechnicalOrgannizers />}
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
