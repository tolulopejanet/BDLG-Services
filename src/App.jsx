import "./App.css";
import Brands from "./components/Brands";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div className="overflow-hidden">
          <Navbar />
          <HeroSection />
          <PurposeSection />
          {/* <AboutUs /> */}
          <Brands />
          <FeaturesSection />
          {/* <Services /> */}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
