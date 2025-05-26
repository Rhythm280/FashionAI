import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[60vh] min-h-[500px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://images.pexels.com/photos/5325881/pexels-photo-5325881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Fashion background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Discover Your <span className="text-pink-500">Perfect Style</span> With AI
          </h1>
          <p className="text-lg text-white opacity-90 mb-8 leading-relaxed">
            Our AI-powered fashion assistant analyzes thousands of styles to recommend personalized outfits that match your preferences and body type.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors shadow-lg">
              Explore Collections
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              How It Works
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}