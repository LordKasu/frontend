import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import hbImg from '../assets/m.jpeg';
import ctImg from '../assets/msa2.jpeg';
import ndImg from '../assets/vs.jpeg';

const imageMap = {
  nairobiImg: hbImg,
  nakuruImg: ctImg,
  rumaImg: hbImg,
  mombasaImg: ctImg,
  ndanuImg: ndImg,
  maraImg: hbImg,
  default: ndImg
};

const API_BASE_URL = 'https://kasutours-backend.onrender.com';

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/tours/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Tour not found');
        }
        return res.json();
      })
      .then((data) => {
        setTour(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-blue-900">Loading tour details...</h2>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Tour Not Found</h2>
        <Link to="/" className="text-orange-500 hover:underline">Return Home</Link>
      </div>
    );
  }

  const numericPrice = typeof tour.price === 'string' 
    ? parseFloat(tour.price.replace(/[^0-9.]/g, '')) || 0 
    : tour.price;

  return (
    <div className="bg-gray-50 min-h-screen pb-16 animate-fade-in">
      <div className="w-full h-[50vh] relative">
        <img 
          src={imageMap[tour.image_url] || imageMap.default} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{tour.name}</h1>
            <p className="text-xl text-gray-200">📍 Kenya</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {tour.description}
            </p>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-4">What's Included</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Professional local guide</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Round-trip transportation</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> All park entry fees</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span> Bottled water and snacks</li>
            </ul>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book This Service</h3>
              <div className="text-4xl font-extrabold text-orange-500 mb-6">
                Ksh {numericPrice.toLocaleString()}
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