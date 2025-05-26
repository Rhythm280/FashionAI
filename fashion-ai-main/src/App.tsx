import React from 'react';
import { Home } from './pages/Home';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}

export default App;