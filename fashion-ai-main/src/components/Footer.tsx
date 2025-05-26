import React from 'react';
import { Shirt, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shirt className="h-8 w-8 text-pink-500" />
              <h2 className="ml-2 text-2xl font-bold text-white">Fashion<span className="text-pink-500">AI</span></h2>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered fashion assistant helping you discover your perfect style with personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Women</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Men</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FashionAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-pink-500 text-sm transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-500 hover:text-pink-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-pink-500 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}