import React, { useState } from 'react';

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="grocery">Grocery</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        {/* Add other category options as needed */}
      </select>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
