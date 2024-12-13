import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./img/hero.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to The Palms Resort by Dr. Bhoir</h1>
            <p className="text-xl md:text-2xl mb-8">Experience luxury in the heart of nature</p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Accommodation"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Luxury Accommodation</h3>
            <p className="text-gray-600">Experience comfort in our beautifully designed rooms and suites.</p>
          </div>
          
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Fine Dining"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
            <p className="text-gray-600">Savor exquisite cuisine prepared by our world-class chefs.</p>
          </div>
          
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Wellness Spa"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wellness Spa</h3>
            <p className="text-gray-600">Rejuvenate your body and mind in our luxury spa facilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}