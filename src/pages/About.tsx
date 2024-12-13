import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              The Palms Resort by Dr. Bhoir has been a haven of tranquility for travelers seeking an escape from the bustling city life. Our resort combines luxury with nature's beauty to create an unforgettable experience.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence and sustainable practices has made us a leading destination for both leisure and business travelers. We take pride in our exceptional service and our dedication to preserving the natural beauty that surrounds us.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Resort Overview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our service, ensuring our guests receive nothing but the best.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">We are committed to sustainable practices that protect and preserve our natural environment.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">We believe in giving back to our community and creating positive impacts in the lives of others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}