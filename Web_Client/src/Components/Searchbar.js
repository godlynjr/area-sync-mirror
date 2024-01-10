import React, { useState } from 'react';

const ServiceSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Appeler la fonction de recherche parente
    onSearch(searchTerm);
  };

  return (
    <div className='space-x-10 '>
      <input
        type="text"
        placeholder="Rechercher un service..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border border-solid border-black rounded-lg bg-red-50 my-5 w-96 h-10 px-5'
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default ServiceSearch;
