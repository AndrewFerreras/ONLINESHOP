import Header from "../components/header";
import SeccionP from "../components/seccionProductD";
import Seccion  from "../components/seccion";
import Products from '../Mocks/products.json';

const Home = () => {
  return (
    <>
     <Header includeBanner={true}/>

      <SeccionP
        PclassName={"productos-destacados"}
        PwidthColum={4}
        Plistproduct={Products.Products}
      />
      <Seccion
        PclassName={"productos-destacados"}
        PwidthColum={4}
      />
    </>
  );
};

export default Home;
