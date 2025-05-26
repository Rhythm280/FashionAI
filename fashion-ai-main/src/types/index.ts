export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  colors: string[];
  sizes: string[];
}

export type ClothingCategory = 'all' | 'tops' | 'bottoms' | 'dresses' | 'outerwear' | 'accessories' | 'shoes';

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  filteredItems: ClothingItem[];
  activeCategory: ClothingCategory;
  setActiveCategory: (category: ClothingCategory) => void;
}