import React from "react";
import Navbar from "./NavBar";
import Banner from "./Banner";

const Header = ({includeBanner}) => {
  return (
    <>
      <header>
        <Navbar />

        {
          includeBanner &&   <Banner
          title='Bienvenido a nuestra tienda online'
          detail='Encuentra los mejores productos al mejor precio'
          /> 
        }
      
      </header>
    </>
  );
};

export default Header;
