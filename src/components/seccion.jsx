import React from "react";

const Seccion =({ PclassName, PwidthColum,Pcomponet}) =>{
    return (
        <section className={`${PclassName}`}>
          <div className="container">
            <div className="row">
             
                <div className={`col-md-${PwidthColum}`}>
                  {Pcomponet}
                </div>
             
            </div>
          </div>
        </section>
      );
}

export default Seccion;