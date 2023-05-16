import React from "react";
import Card from "./card.jsx";

const seccionProductD = ({ PclassName, PwidthColum, Plistproduct }) => {
  return (
    <section className={`${PclassName}`}>
     
      <div className="container">
      <h3>Productos mas vendidos</h3>
        <div className="row">
          {Plistproduct.map(({ title, detail, hurl,pimagen }) => (
            <div className={`col-md-${PwidthColum}`}>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default seccionProductD;
