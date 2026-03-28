import { Link } from 'react-router-dom';

function Hero() {
  return (
    // The main container with a background image
    <div 
      className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop')" }}
    >
      {/* The Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* The Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Discover Kenya's <span className="text-orange-500">Hidden Gems</span>
        </h1>
        
        {/* Subheadline */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 mb-10">
          From the wild beauty of Ruma National Park to the pristine beaches of Mombasa. Your ultimate adventure starts here.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/services" 
            className="bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            Explore Tours
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero;