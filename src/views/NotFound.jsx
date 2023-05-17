import { default as logo } from "../assets/404-error.svg"
import Button from "../components/Button"
const NotFound = () => {
  return (
    <main  className="container-xl px-4">
      
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mt-4">
              <img className="img-fluid p-4" src={logo} alt="" />
              <p className="lead">Lo sentimos, este recurso no existe.</p>
             
             <Button
              content="Volver al Inicio"
              route="/"
             />
            </div>
          </div>
        </div>
      
    </main>
  );
};


export default NotFound;
