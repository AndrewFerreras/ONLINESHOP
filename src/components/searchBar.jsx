//import React, { useState } from 'react';
import  '../css/SearchBar.css'
import Button from './Button';
const SearchBar = ({handleSearch,handleInputChange,search}) => {

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar..."
        name="Isearch"
        value={search}
        onChange={handleInputChange}
      />
     <Button
      typeButton='submit'
      colorButton='btn-primary'
      content="Buscar"
      />
    </form>
  );
};

export default SearchBar;