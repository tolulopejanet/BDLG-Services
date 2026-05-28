import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ServicesPage from './pages/ServicePage';
import ProductsPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUs';
// import BlogPage from './pages/Blog';
import ContactUsPage from './pages/ContactUs';
import ScheduleCallPage from './pages/ScheduleCall';
import CareerPage from './pages/Career';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (

    <div className="w-full min-h-screen overflow-x-hidden bg-[#020711] text-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/schedule" element={<ScheduleCallPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/career" element={<CareerPage />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;