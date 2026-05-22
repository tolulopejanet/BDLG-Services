import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home'; // your homepage component
import ServicesPage from './pages/ServicePage';
import ProductsPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUs';
import BlogPage from './pages/Blog';
import PartnersPage from './pages/Partners';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        {/* add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;