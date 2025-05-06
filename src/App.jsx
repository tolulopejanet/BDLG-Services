import "./App.css";
import { Routes, Route } from "react-router";
import Brands from "./components/Brands";
import AboutUs from "./routes/AboutUs";
import ServiceSection from "./components/Services";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactUs from "./routes/ContactUs";
import ServicePage from "./routes/ServicePage";
import Training from "./routes/Training";
import Blog from "./routes/Blog";

function Home() {
  return (
    <>
      <HeroSection />
      <PurposeSection />
      <Brands />
      <ServiceSection />
      <FeaturesSection />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background blur effect */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main content grows to fill space */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer sticks to the bottom */}
      <Footer />
    </div>
  );
}

export default App;
