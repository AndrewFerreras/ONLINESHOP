import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";

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
