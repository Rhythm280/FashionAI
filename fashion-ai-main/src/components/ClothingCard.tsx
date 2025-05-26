import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
// import { ClothingItem } from '../types';

interface ClothingItem {
  _id: string;
  name: string;
  description: string;
  itemType: string;
  subtype: string;
  style?: string;
  occasion?: string;
  colorPattern?: string;
  price: number;
  imageUrl: string;
}

interface ClothingCardProps {
  item: ClothingItem;
}

export function ClothingCard({ item }: ClothingCardProps) {
  const [isHovered, setIsHovered]     = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div 
      className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>

      {/* Favorite Button */}
      <div className="absolute top-2 right-2">
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className={`p-2 rounded-full transition-all ${
            isFavorited 
              ? 'bg-pink-900/30 text-pink-500' 
              : 'bg-gray-800/80 text-gray-400 opacity-0 group-hover:opacity-100'
          }`}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-pink-500' : ''}`} />
        </button>
      </div>

      {/* Details */}
      <div className="p-4 bg-gray-900 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-white">{item.name}</h3>
            <p className="text-sm text-gray-400 capitalize">{item.subtype}</p>
          </div>
          <p className="font-semibold text-pink-500">${item.price.toFixed(0)}</p>
        </div>

        <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1 text-xs">
          {item.occasion && (
            <span className="bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded-full capitalize">
              {item.occasion}
            </span>
          )}
          {item.style && (
            <span className="bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded-full capitalize">
              {item.style}
            </span>
          )}
          {item.colorPattern && (
            <span className="bg-yellow-900/30 text-yellow-300 px-2 py-0.5 rounded-full capitalize">
              {item.colorPattern}
            </span>
          )}
          {item.itemType && (
            <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full capitalize">
              {item.itemType}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button 
          className="mt-4 w-full py-2 bg-pink-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-pink-600 transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}