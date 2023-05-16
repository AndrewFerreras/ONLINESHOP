import React from 'react';
import Button from './Button';
const Banner = ({title,detail}) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{title}</h1>
            <p>{detail}</p>
            <Button
            content='Buscar productos'
            colorButton = 'btn-primary'
            route='/products'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;