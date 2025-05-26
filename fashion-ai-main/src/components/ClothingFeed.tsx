// src/components/ClothingFeed.tsx
import React from 'react';
import { ClothingCard } from './ClothingCard';
import { useSearch } from '../contexts/SearchContext';

export function ClothingFeed() {
  const {
    filteredItems,
    searchQuery,
    isLoading,
    reply     // ← pull it out
  } = useSearch();

  return (
    <div className="py-4">
      {searchQuery.trim() && (
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="bg-indigo-100 rounded-full p-2">
                {/* your icon */}
                <svg /*…*/ />
              </div>
              <h2 className="ml-3 text-lg font-semibold text-gray-800">
                FashionAI Assistant
              </h2>
            </div>

            {isLoading ? (
              <div className="mt-4 flex items-center space-x-2">
                <div className="animate-pulse flex space-x-2">
                  <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full"></div>
                  <div className="h-2.5 w-2.5 bg-indigo-600 rounded-full"></div>
                </div>
                <p className="text-gray-500">Processing your request...</p>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {reply || `Here are personalized outfit recommendations based on "${searchQuery}".`}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <ClothingCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600">
              Try a different search or browse our categories.
            </p>
          </div>
        )
      )}
    </div>
  );
}
