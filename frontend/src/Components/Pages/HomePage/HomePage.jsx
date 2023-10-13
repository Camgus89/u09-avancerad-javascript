import Navbar from '../../Navigation/Navbar';
import Herosection from '../../Herosection/Herosection';
import Features from '../../../Features/Features';
import CardComponent from '../../Price/CardComponent';


const HomePage = () => {
  return (
    <>
    <Navbar/> 
    <Herosection />
    <Features />
    <CardComponent/>
    </>
  )
}

export default HomePage
