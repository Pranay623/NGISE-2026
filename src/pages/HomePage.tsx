import Hero from "../components/Hero";
import AboutSection from "../components/About";
import ConferenceTracks from "../components/ConferenceTracks/ConferenceTracks";
import ImpDates from "../components/ImpDates";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ImpDates />
      <AboutSection />
      <div className="mb-12">
        <ConferenceTracks />
      </div>
    </div>
  );
};

export default HomePage;
