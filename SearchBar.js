import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
