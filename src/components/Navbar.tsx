import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Palmtree } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Palmtree className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">The Palms Resort by Dr. Bhoir</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium
              ${isActive ? 'text-green-600' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium
              ${isActive ? 'text-green-600' : ''}`
            }>
              About Us
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => 
              `text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium
              ${isActive ? 'text-green-600' : ''}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium
              ${isActive ? 'text-green-600' : ''}`
            }>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`
            }>
              About Us
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`
            }>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}