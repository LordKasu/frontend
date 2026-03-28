
import { Link } from 'react-router-dom';
import KasuLogo from './KasuLogo'; // Let's reuse our awesome SVG logo!

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid for columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <KasuLogo size="h-8" mainColor="text-white" accentColor="text-orange-500" />
              <span className="text-2xl font-bold tracking-wider">KasuTours</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for unforgettable Kenyan adventures. From the wild heart of Ruma to the white sands of Mombasa, we curate experiences that last a lifetime.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="mr-3">📍</span> 
                <span>Eldoret, Uasin Gishu County<br />Kenya</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span> 
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span> 
                <span>hello@kasutours.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} KasuTours. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;