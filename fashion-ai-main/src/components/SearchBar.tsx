import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon, Mic, MicOff } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export function SearchBar() {
  const { 
    searchQuery, 
    setSearchQuery, 
    isListening,
    startListening,
    stopListening,
    runAISearch
  } = useSearch();
  
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  // When voice ends, trigger a search automatically
  useEffect(() => {
    if (!isListening && searchQuery.trim()) {
      runAISearch(searchQuery.trim());
    }
  }, [isListening]);
  
  // Keep focus while listening
  useEffect(() => {
    if (isListening && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isListening]);

  const handleVoiceToggle = () => {
    if (isListening) stopListening();
    else startListening();
  };

  const handleSearchClick = () => {
    const q = searchQuery.trim();
    if (q) runAISearch(q);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchClick();
    }
  };

  return (
    <div className={`relative rounded-full border transition-all duration-300 ${
      isFocused 
        ? 'border-pink-500 shadow-md ring-2 ring-pink-100/20 bg-gray-800' 
        : 'border-gray-700 bg-gray-800/90'
    }`}>
      <div className="flex items-center px-4 py-2 space-x-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        
        <input
          ref={inputRef}
          type="text"
          placeholder={isListening ? 'Listening...' : "What's your mood today?"}
          className="flex-1 bg-transparent outline-none placeholder-gray-400 text-gray-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Search Button */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}            // prevent blur
          onClick={handleSearchClick}
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
        >
          Search
        </button>

        {/* Voice Button */}
        <button 
          type="button"
          onMouseDown={(e) => e.preventDefault()}            // prevent blur
          onClick={handleVoiceToggle}
          className={`p-2 rounded-full transition-colors ${
            isListening 
              ? 'bg-pink-900/30 text-pink-500' 
              : 'text-gray-400 hover:text-pink-500'
          }`}
          aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
        >
          {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </button>
      </div>
      
      {isFocused && (
        <div className="absolute -bottom-6 left-0 w-full text-xs text-gray-400 px-4">
          <p>Try: "Show me summer outfits" or "formal business attire"</p>
        </div>
      )}
    </div>
  );
}