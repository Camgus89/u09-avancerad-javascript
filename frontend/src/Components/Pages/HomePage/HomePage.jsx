import Navbar from '../../Navigation/Navbar';
import Herosection from '../../Herosection/Herosection';
// import Features from '../../../Features/Features';
import Products from '../Products/Products';
import CallToAction from '../../CallToAction/CallToAction';
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";
import SearchBar from '../../SearchBar/SearchBar';

const HomePage = () => {
  return (
    <>
    <Navbar/> 
    <Herosection />
    <SearchBar/>
    {/* <Features /> */}
    <Products/>
    <CallToAction/>
    <Review/>
    <Footer/>
    </>
  )
}

export default HomePage;
