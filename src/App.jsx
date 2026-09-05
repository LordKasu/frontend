import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import hbImg from './assets/m.jpeg'; 
import ctImg from './assets/msa2.jpeg';
import ndImg from './assets/vs.jpeg'; 

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollTop';
import Hero from './components/Hero';
import TourCard from './components/TourCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TourDetails from './pages/TourDetails';
import Contact from './pages/Contact'; 
import Services from './pages/Services'; 
import About from './pages/About'; 

const imageMap = {
  nairobiImg: hbImg,
  nakuruImg: ctImg,
  rumaImg: hbImg,
  mombasaImg: ctImg,
  ndanuImg: ndImg,
  maraImg: hbImg,
  default: ndImg
};

function App() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/tours')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTours(data);
          setError(null);
        } else {
          setTours([]);
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
    
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="animate-fade-in">
                <Hero />
                
                <div className="max-w-7xl mx-auto px-4 py-16">
                  
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Our Top Destinations</h2>
                    <p className="mt-4 text-xl text-gray-500">Hand-picked tours for your next adventure.</p>
                  </div>

                  {error && (
                    <div className="text-center p-4 mb-8 bg-red-100 text-red-700 rounded">
                      Database connection failed ({error}). Displaying temporary offline mode.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {tours.map((tour, index) => {
                      if (!tour) return null;
                      
                      const numericPrice = typeof tour.price === 'string' 
                        ? parseFloat(tour.price.replace(/[^0-9.]/g, '')) || 0 
                        : tour.price;

                      return (
                        <TourCard 
                          key={tour.id || index}
                          id={tour.id}
                          title={tour.name || 'Adventure Tour'}
                          location="Kenya"
                          price={numericPrice || 0}
                          imageUrl={imageMap[tour.image_url] || imageMap.default}
                        />
                      );
                    })}

                  </div>
                </div>
                <Testimonials/>
                <div>
                  <Footer/>
                </div>
              </div>
            } />
            
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/tour/:id" element={<TourDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;