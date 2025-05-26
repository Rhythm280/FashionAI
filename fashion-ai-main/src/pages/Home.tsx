import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CategoryFilter } from '../components/CategoryFilter';
import { ClothingFeed } from '../components/ClothingFeed';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {/* <Hero /> */}
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            AI-Powered Fashion Discovery
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Browse our collection or ask our AI assistant to recommend outfits that match your style,
            occasion, or even your mood. Simply type or use voice search to get personalized fashion advice.
          </p>
        </div>
        
        <CategoryFilter />
        <ClothingFeed />
      </main>
      
      <Footer />
    </div>
  );
}