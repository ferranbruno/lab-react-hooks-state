import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList, { sampleProducts } from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Get categories dynamically
  const categories = [
    'All',
    ...new Set(sampleProducts.map((p) => p.category)),
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === 'All'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>🛒 Shopping App</h1>

        <DarkModeToggle
          darkMode={darkMode}
          onToggle={toggleDarkMode}
        />
      </header>

      <div>
        <label htmlFor="category-filter">
          Filter by Category:
        </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          data-testid="category-filter"
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;