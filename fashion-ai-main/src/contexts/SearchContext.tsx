import React, { createContext, useContext, useState } from 'react';
import type { ClothingCategory } from '../types';

type SearchContextType = {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredItems: any[];
  isLoading: boolean;
  reply: string;                    // ← new
  runAISearch: (q: string) => void;
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  activeCategory: ClothingCategory;
  setActiveCategory: (cat: ClothingCategory) => void;
};

const SearchContext = createContext<SearchContextType>(null!);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery]     = useState('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [isLoading, setIsLoading]         = useState(false);
  const [reply, setReply]                 = useState('');     // ← new

  // voice…
  const [isListening, setIsListening] = useState(false);
  const startListening = () => { setIsListening(true); /*…*/ };
  const stopListening  = () => { setIsListening(false); /*…*/ };

  const [activeCategory, setActiveCategory] = useState<ClothingCategory>('all');

  const runAISearch = async (query: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/ai/fashion-recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      const json = await res.json();
      setFilteredItems(json.results);
      setReply(json.reply || '');           // ← capture the assistant reply
    } catch (err) {
      console.error('Search failed', err);
      setFilteredItems([]);
      setReply('Sorry, something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      filteredItems,
      isLoading,
      reply,                              // ← expose it
      runAISearch,
      isListening,
      startListening,
      stopListening,
      activeCategory,
      setActiveCategory
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
