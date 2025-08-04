import { Route , Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import { createContext , useEffect , useState } from "react";
import axios from "axios";
import EndPoints from "./Apis/EndPoints";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
export const CategoryContext = createContext();

function App(){

  const [categoryList,setcategoryList]=useState([])
  const loadCategories  = async()=>{
        try{
             const response = await axios.get(EndPoints.Category_List);
            //  console.log(response.data);                      
             setcategoryList(response.data);
        }
        catch(err){
          console.log(err);
        }
    }
       useEffect(()=>{
        loadCategories();
     },[]);
    return <>
      <CategoryContext.Provider value={{categoryList,setcategoryList}}>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element = {<SignUp/>}/>
              <Route path="/signin" element = {<SignIn/>}/>
          </Routes>
      </CategoryContext.Provider>
     

    {/* <!-- Products Start -->
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-2.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-3.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-4.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-5.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-6.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-7.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-8.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
    <!-- Products End --> */}


    {/* <!-- Offer Start -->
    <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-6">
                <div className="product-offer mb-30" style="height: 300px;">
                    <img className="img-fluid" src="img/offer-1.jpg" alt="">
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-offer mb-30" style="height: 300px;">
                    <img className="img-fluid" src="img/offer-2.jpg" alt="">
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Offer End --> */}


    {/* <!-- Products Start -->
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-2.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-3.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-4.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-5.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-6.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-7.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                        <img className="img-fluid w-100" src="img/product-8.jpg" alt="">
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
    <!-- Products End --> */}


    {/* <!-- Vendor Start -->
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel vendor-carousel">
                    <div className="bg-light p-4">
                        <img src="img/vendor-1.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-2.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-3.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-4.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-5.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-6.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-7.jpg" alt="">
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-8.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Vendor End --> */}


    {/* <!-- Footer Start -->
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address">
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <a className="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
                    by
                    <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt="">
            </div>
        </div>
    </div> */}

    </>
}
export default  App;
