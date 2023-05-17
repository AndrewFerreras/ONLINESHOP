import React from "react";
import Icon from "./Icon"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Tienda Online. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6">
            <ul className="redes-sociales">
            <Icon ClassIconName='fab fa-facebook-f'/>
            <Icon ClassIconName='fab fa-twitter'/>
            <Icon ClassIconName='fab fa-instagram'/>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;