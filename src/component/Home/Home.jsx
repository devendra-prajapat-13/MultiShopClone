import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ServiceOffer from "../ServiceOffer/ServiceOffer";
import Categories from "../Categories/Categories";
import FeaturedProduct from "../Product/FeaturedProduct";
import Footer from "../Footer/footer";
function Home(){
     return <>
       <Header/>
       <Slider/>
       <ServiceOffer/>
       <Categories/>
       <FeaturedProduct/>
       <Footer/>
     </>
}

export default Home;
