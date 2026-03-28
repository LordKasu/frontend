import { Link } from 'react-router-dom';

// Notice the curly braces { ... } inside the parentheses!
function TourCard({ id, title, location, price, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Location Badge overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
          📍 {location}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        
        {/* Price and Button Container */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <div className="text-lg font-extrabold text-orange-500">
            Ksh {price.toLocaleString()}
          </div>
          
          <Link 
            to={`/tour/${id}`} 
            className="bg-blue-900 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default TourCard;