import Hero from "../components/Hero";
import AboutSection from "../components/About";
import ImpDates from "../components/ImpDates";

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <ImpDates />
    </div>
  );
};

export default HomePage;
