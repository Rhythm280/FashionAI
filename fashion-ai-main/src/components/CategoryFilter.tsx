import React from 'react';
import { useSearch } from '../contexts/SearchContext';
import { ClothingCategory } from '../types';

const categories: { value: ClothingCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'dresses', label: 'Dresses' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'loungewear', label: 'Loungewear' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'formal', label: 'Formal' },
  { value: 'denim', label: 'Denim' },
  { value: 'bags', label: 'Bags' },
  { value: 'workwear', label: 'Workwear' },
  { value: 'accessories', label: 'Accessories' },
];

export function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useSearch();

  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-6 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
              activeCategory === category.value
                ? 'bg-pink-500 text-white shadow-md'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}