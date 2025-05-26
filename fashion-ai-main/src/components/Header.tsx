import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { Shirt } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 shadow-md py-2' : 'bg-gray-900 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shirt className="h-8 w-8 text-pink-500" />
            <h1 className="ml-2 text-2xl font-bold text-white">Fashion<span className="text-pink-500">AI</span></h1>
          </div>
          
          <div className="hidden md:block md:w-1/2 lg:w-2/5">
            <SearchBar />
          </div>
          
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                {/* <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                  Sign In
                </button> */}
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-4 md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}