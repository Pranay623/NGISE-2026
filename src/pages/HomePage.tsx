import Hero from "../components/Hero";
import AboutSection from "../components/About";
import ConferenceTracks from "../components/ConferenceTracks/ConferenceTracks";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <div className="pb-20 ">
        <ConferenceTracks />
      </div>
    </div>
  );
};

export default HomePage;
