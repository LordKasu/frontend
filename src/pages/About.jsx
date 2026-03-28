import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20  animate-fade-in ">
      
      {/* 1. Header Section */}
      <div className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Discover the Heart of Kenya
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We are KasuTours. Dedicated to crafting unforgettable adventures from the wild savanna to the pristine coast.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* 2. Our Story Section (Two Columns) */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80" 
              alt="Safari vehicle in Kenya" 
              className="rounded-xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in Eldoret, KasuTours began with a simple mission: to share the hidden gems of Kenya that most standard tour packages miss. We realized that true adventure isn't just about visiting a place; it's about experiencing it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you are tracking the rare Roan antelope in Ruma National Park or watching the sun sink below the horizon on a Mombasa dhow cruise, our local expertise ensures your journey is authentic, safe, and entirely unforgettable.
            </p>
            <Link 
              to="/services" 
              className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-md hover:bg-orange-600 transition-colors shadow-md"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* 3. Why Choose Us Section (Three Columns) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900">Why Travel With Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
            <p className="text-gray-600">
              Our guides are born and raised in Kenya. We know the roads, the wildlife, and the culture better than anyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-900">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
            <p className="text-gray-600">
              Your well-being is our top priority. We use well-maintained vehicles and partner with certified local authorities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Experiences</h3>
            <p className="text-gray-600">
              No two travelers are the same. We customize our itineraries to fit your pace, interests, and budget perfectly.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;