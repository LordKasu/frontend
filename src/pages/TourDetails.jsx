import { useParams, Link } from 'react-router-dom';

import hbImg from '../assets/m.jpeg';
import ctImg from '../assets/msa2.jpeg';
import ndImg from '../assets/vs.jpeg';


// We recreate our dummy data here for now. 
// Later, your Node.js backend will send this directly to the page!
const dummyTours = [
  {
    id: 1,
    title: "Ruma National Park Safari",
    location: "Homa Bay",
    price: 8500,
    description: "Experience the raw beauty of Kenya's hidden gem. Home to the rare Roan antelope, this full-day safari includes guided tracking, a bush picnic, and breathtaking views of the Lambwe Valley.",
    imageUrl: hbImg
  },
  {
    id: 2,
    title: "Mombasa Coastal Retreat",
    location: "Mombasa",
    price: 15000,
    description: "Unwind on the pristine white sands of the Kenyan coast. Enjoy a 3-day retreat featuring snorkeling in the marine park, sunset dhow cruises, and authentic Swahili cuisine.",
    imageUrl: ctImg
  },
  {
    id: 3,
    title: "Ndanu Falls Expedition",
    location: "Gem",
    price: 4500,
    description: "A thrilling nature walk through lush green trails leading to the magnificent Ndanu Falls. Perfect for hiking enthusiasts, photography, and experiencing the tranquil sounds of cascading water.",
    imageUrl: ndImg
  }
];

function TourDetails() {
  // 1. Grab the ID from the URL
  const { id } = useParams();
  
  // 2. Find the specific tour in our array that matches that ID
  const tour = dummyTours.find((t) => t.id === parseInt(id));

  // 3. Safety check: What if they type a fake ID in the URL?
  if (!tour) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Service Not Found</h2>
        <Link to="/" className="text-orange-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  // 4. If the tour is found, render the actual page!
  return (
    <div className="bg-gray-50 min-h-screen pb-16   animate-fade-in">
      
      {/* Hero Image Section */}
      <div className="w-full h-[50vh] relative">
        <img 
          src={tour.imageUrl} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{tour.title}</h1>
            <p className="text-xl text-gray-200">📍 {tour.location}</p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Description */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {tour.description}
            </p>
            
            {/* Fake Itinerary section to make it look realistic */}
            <h3 className="text-2xl font-bold text-blue-900 mb-4">What's Included</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Professional local guide</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Round-trip transportation</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> All park entry fees</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Bottled water and snacks</li>
            </ul>
          </div>

          {/* Right Side: Booking Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book This Service</h3>
              <div className="text-4xl font-extrabold text-orange-500 mb-6">
                Ksh {tour.price.toLocaleString()}
                <span className="text-sm text-gray-500 font-normal block mt-1">per person</span>
              </div>
              
              <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-colors mb-4">
                Proceed to Payment
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Secure checkout powered by M-Pesa coming soon!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TourDetails;