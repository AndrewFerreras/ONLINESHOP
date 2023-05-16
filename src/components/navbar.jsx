import React, { useState } from 'react';
import ButtonNavBar from './ButtonNav';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" >Tienda Online</Link>
        <button className="navbar-toggler" type="button" onClick={handleToggleMenu} aria-expanded={isMenuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <ButtonNavBar 
            title = 'Inicio'
            uref = '#'
            />
            <ButtonNavBar
             title = 'Productos'
             uref = '#'
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;