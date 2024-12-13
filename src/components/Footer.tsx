import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@serenityresort.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <a href="https://maps.app.goo.gl/hUGhefa5aVz6XDtc7" target='_blank'>56/3 B DAHAGAON-MANJARLI ROAD,TAL-KALYAN-421103</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/gallery" className="hover:text-green-400">Gallery</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Palms-Resort-Dr-Bhoir-farm/100092194719192/?_rdr" target='_blank' className="hover:text-green-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/drbhoirfarm/" target='_blank' className="hover:text-green-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} The Palms Resort by Dr. Bhoir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}