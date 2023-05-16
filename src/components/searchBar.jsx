//import React, { useState } from 'react';
import  '../css/SearchBar.css'
import Button from './Button';
const SearchBar = ({handleSearch,handleInputChange,search}) => {
//  const [searchTerm, setSearchTerm] = useState('');

  //const handleInputChange = (event) => {
    //setSearchTerm(event.target.value);
 // };

 // const handleSearch = (event) => {
   /// event.preventDefault();
    // Aquí puedes agregar la lógica para realizar la búsqueda con el término searchTerm
   // console.log('Realizar búsqueda con:', searchTerm);
//  };

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