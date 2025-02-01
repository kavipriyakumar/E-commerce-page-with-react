import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'A high-performance laptop' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest model smartphone' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling headphones' },
    { id: 4, name: 'Watch', price: 150, description: 'Stylish analog watch' },
    { id: 5, name: 'Keyboard', price: 50, description: 'Mechanical keyboard' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>E-Commerce Site</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
