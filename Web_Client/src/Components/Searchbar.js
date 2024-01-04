import React, { useState } from 'react';

const ServiceSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Appeler la fonction de recherche parente
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un service..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border border-solid border-purple-900'
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default ServiceSearch;
