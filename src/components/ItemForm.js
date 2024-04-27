import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">Item Name:</label>
      <input
        id="itemName"
        type="text"
        value={itemName}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="itemCategory">Category:</label>
      <select
        id="itemCategory"
        value={itemCategory}
        onChange={handleCategoryChange}
      >
        <option value="Produce">Produce</option>
        <option value="Grocery">Grocery</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        {/* Add other category options as needed */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;

