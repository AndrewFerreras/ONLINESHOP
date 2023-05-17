import SeccionP from "../components/seccionProductD";
import Products from '../Mocks/products.json';
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
     <Header includeBanner={true}/>

      <SeccionP
        PclassName={"productos-destacados"}
        PwidthColum={4}
        Plistproduct={Products.Products}
      />
     
      <Footer/>
    </>
  );
};

export default Home;
