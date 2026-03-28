import React from 'react';

// Our dummy data for the testimonials (3 individuals, 1 company)
const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Solo Traveler, UK",
    text: "The Ndanu Falls expedition was breathtaking! KasuTours handled the transport and guide perfectly. I felt safe and amazed the entire time.",
    type: "individual"
  },
  {
    id: 2,
    name: "James Omondi",
    role: "Local Explorer",
    text: "I've lived in Kenya my whole life and never knew Ruma National Park was this beautiful. The booking process was seamless.",
    type: "individual"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Travel Photographer",
    text: "The Mombasa coastal retreat gave me some of the best sunset shots of my career. Highly recommend their organized itineraries.",
    type: "individual"
  },
  {
    id: 4,
    name: "TechNova Solutions",
    role: "Corporate Retreat (25 Staff)",
    text: "KasuTours organized our entire annual company retreat to the coast. Flawless execution, great team-building spots, and zero stress for our HR team.",
    type: "company"
  }
];

function Testimonials() {
  return (
    <div className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Our Explorers Say</h2>
          <p className="mt-4 text-xl text-blue-200">Don't just take our word for it.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className={`p-6 rounded-xl shadow-lg flex flex-col ${
                review.type === 'company' ? 'bg-orange-500 text-white' : 'bg-white text-gray-900'
              }`}
            >
              {/* The Stars */}
              <div className="flex text-yellow-400 mb-4">
                ★★★★★
              </div>
              
              {/* The Review Text */}
              <p className={`flex-grow italic mb-6 ${review.type === 'company' ? 'text-white' : 'text-gray-600'}`}>
                "{review.text}"
              </p>
              
              {/* The Reviewer Info */}
              <div className="mt-auto border-t border-opacity-20 pt-4 border-gray-300">
                <p className="font-bold text-lg">{review.name}</p>
                <p className={`text-sm ${review.type === 'company' ? 'text-blue-900 font-semibold' : 'text-orange-500'}`}>
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Testimonials;