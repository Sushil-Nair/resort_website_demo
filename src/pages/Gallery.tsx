import React from 'react';

const galleryImages = [
  {
    url: './img/Luxury Rooms.avif',
    caption: 'Luxury Room'
  },
  {
    url: './img/Swimming pool.jpg',
    caption: 'Pool View'
  },
  {
    url: './img/Rooms.avif',
    caption: 'Cozy Stays Crafted Just for You.'
  },
  {
    url: './img/outdoor activities.jpg',
    caption: 'Outdoor Activity'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Garden View'
  },
  {
    url: './img/Poolside.jpg',
    caption: 'Poolside'
  }
];

export default function Gallery() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./img/Swimming pool.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}