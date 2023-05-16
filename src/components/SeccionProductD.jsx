import React from "react";
import Card from "./Card";
const seccionProductD = ({ PclassName, PwidthColum, Plistproduct }) => {
  return (
    <section className={`${PclassName}`}>
      <div className="container">
        <h3>Productos mas vendidos</h3>
        <div className="row">
          {Plistproduct?.map((product) => (
            <div className={`col-md-${PwidthColum}`}>
              {
                <Card
                  key={product.Id}
                  Id={product.Id}
                  ptitle={product.title}
                  pimagen={product.pimagen}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default seccionProductD;
