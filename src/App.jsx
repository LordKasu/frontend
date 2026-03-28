
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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


// DUMMY DATA: This simulates what your MongoDB database will eventually send us.
const dummyTours = [
  {
    id: 1,
    title: "Ruma National Park Safari",
    location: "Homa Bay",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1547471080-7fc2caa7fd81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mombasa Coastal Retreat",
    location: "Mombasa",
    price: 15000,
    imageUrl: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Ndanu Falls Expedition",
    location: "Gem",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1432405972618-c600f4f71a72?q=80&w=2070&auto=format&fit=crop"
  }
];

function App() {
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
                
                {/* THE TOUR GRID SECTION */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                  
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">Our Top Destinations</h2>
                    <p className="mt-4 text-xl text-gray-500">Hand-picked tours for your next adventure.</p>
                  </div>

                  

                  {/* THE GRID: 
                    grid-cols-1 (Mobile: 1 column)
                    md:grid-cols-2 (Tablet: 2 columns)
                    lg:grid-cols-3 (Desktop: 3 columns)
                  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* THE MAP FUNCTION: 
                      We loop through the dummyTours array. For every single 'tour' inside it, 
                      we render exactly one <TourCard />, passing it the specific data.
                    */}
                    {dummyTours.map((tour) => (
                      <TourCard 
                        key={tour.id} // React needs a unique key when looping
                        id={tour.id}
                        title={tour.title}
                        location={tour.location}
                        price={tour.price}
                        imageUrl={tour.imageUrl}
                      />
                    ))}

                  </div>
                </div>
                <Testimonials/>
                <div>
                  <Footer/>
                </div>
              </div>
            } />
            
            {/* Other routes... */}
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
            
            {/* The Dynamic Route for individual tours! */}
            <Route path="/tour/:id" element={<TourDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;