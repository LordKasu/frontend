import React from 'react';
import TourCard from '../components/TourCard';

import msaImg from '../assets/msa.jpeg';
import ndanuImg from '../assets/ndanu.jpeg';
import amImg from '../assets/a.jpeg';
import teamImg from '../assets/team.jpeg';

// Our dummy data. 
// I've added a 4th service here so you can see how the grid automatically expands!
// (Remember to swap these Unsplash links with your local imports if you prefer!)
const dummyServices = [
  {
    id: 1,
    title: "Ruma National Park Safari",
    location: "Homa Bay",
    price: 8500,
    imageUrl: amImg
  },
  {
    id: 2,
    title: "Mombasa Coastal Retreat",
    location: "Mombasa",
    price: 15000,
    imageUrl: msaImg
  },
  {
    id: 3,
    title: "Ndanu Falls Expedition",
    location: "Gem",
    price: 4500,
    imageUrl: ndanuImg
  },
  {
    id: 4,
    title: "Corporate Team Building",
    location: "Various Locations",
    price: 25000,
    imageUrl: teamImg
  }
];

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen py-16  animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">Our Services & Destinations</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            From wild safaris to corporate retreats, choose your next experience. We handle the logistics, you make the memories.
          </p>
        </div>

        {/* The Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* We map through our array and print a Reusable TourCard for each one! */}
          {dummyServices.map((service) => (
            <TourCard 
              key={service.id}
              id={service.id}
              title={service.title}
              location={service.location}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Services;