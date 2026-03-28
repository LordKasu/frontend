import { useState } from 'react';
import { Link } from 'react-router-dom';
import KasuLogo from './KasuLogo';

function Navbar() {
  // 1. STATE: Keeps track of whether the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  // 2. HELPER FUNCTION: Closes the menu automatically when a user clicks a link
  const closeMenu = () => setIsOpen(false);

  return (
    // relative and z-50 ensure the dropdown menu sits on TOP of the rest of the page
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT SIDE: Hamburger Icon + Logo */}
          <div className="flex items-center">
            
            {/* The Hamburger Button (Only visible on small screens) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden mr-4 text-blue-900 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                // SVG for the "X" (Close) Icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // SVG for the Hamburger (Open) Icon
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* The Logo (Clicking it also closes the mobile menu) */}
            <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <KasuLogo size="h-10" mainColor="text-blue-900" accentColor="text-orange-500" />
              <span className="text-2xl font-bold text-blue-900 tracking-wider">KasuTours</span>
            </Link>

          </div>

          {/* CENTER: Desktop Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Contact</Link>
          </div>

          {/* RIGHT: Desktop 'Book Tours' Button (Hidden on mobile) */}
          <div className="hidden md:flex">
            <Link 
              to="/services" 
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition-colors shadow-md"
            >
              Book Tours
            </Link>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {/* If isOpen is true, render this block. If false, render nothing. */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/services" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md">Services</Link>
            <Link to="/about" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md">About Us</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md">Contact</Link>
            
            {/* Mobile 'Book Tours' Button */}
            <Link to="/services" onClick={closeMenu} className="block w-full text-center mt-4 bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors shadow-md">
              Book Tours
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;