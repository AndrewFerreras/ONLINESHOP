import { useParams, Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const ProductDetail = () => {
  const { search } = useParams();
  const { products, getProduct, loading } = useProduct();
  useEffect(() => {
    getProduct(search);
  }, []);

  return (
    <>
      <Header includeBanner={false} />
      {loading ? (
        <p>Cargando</p>
      ) : (
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={products.thumbnail}
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">{products.brand}</div>
                <h1 className="display-5 fw-bolder">{products.title}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">
                    ${products.price}{" "}
                  </span>
                </div>
                <p className="lead">{products.description}</p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="number"
                    value="1"
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
