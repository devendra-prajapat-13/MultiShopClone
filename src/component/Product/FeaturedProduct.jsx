import axios from "axios";
import { useEffect, useState } from "react";
import EndPoints from "../../Apis/EndPoints";

function FeaturedProduct() {
  const [ProductList, setProductList] = useState([]);

  const loadProduct = async () => {
    try {
      let response = await axios.get(EndPoints.Product_List);
      console.log(response);
      setProductList(response.data.listProdcut);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      {/* Product  */}

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {ProductList.map((product, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <div
                className="product-item bg-light mb-4 shadow-sm"
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  minHeight: "420px",
                  transition: "transform 0.3s, box-shadow 0.3s", // smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
                <div className="text-center py-3">
                  <a
                    className="h6 text-decoration-none text-truncate"
                    href=""
                    style={{ objectFit: "cover" }}
                  >
                    {" "}
                    {product.title}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </h5>
                    <h6 className="text-muted ml-2">
                      <del>{product.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <button
                      className="btn btn-primary text-white"
                      style={{ borderRadius: "5px", width: "120px" }}
                    >
                      View-More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*SHop now container*/}

      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="img/offer-1.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="img/offer-2.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Product */}

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Recent Products</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-1.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-2.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-3.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-4.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-5.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-6.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-7.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/product-8.jpg"
                  alt=""
                />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="far fa-heart"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-sync-alt"></i>
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  Product Name Goes Here
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small className="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default FeaturedProduct;
