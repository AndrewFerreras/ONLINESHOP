import React from "react";
import { Link } from "react-router-dom";
import '../css/styles.css'
const Card = ({ Id, ptitle, pimagen }) => {
  return (
    <div className="card">
      <img src={`${pimagen}`} className="card-img-top" alt={`Producto${Id}`} />
      <div className="card-body ">
        <h5 className="card-title text-truncate">{ptitle}</h5>
        <a className="btn btn-primary">
          <Link to={`/Product/${Id}`}>Ir al Producto</Link>
        </a>
      </div>
    </div>
  );
};

export default Card;
