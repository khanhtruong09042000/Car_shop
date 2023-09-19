import Slide  from "../components/Slide";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
  return (
      <div>
          <Navbar/>
          <Slide/>
          <Products/>
          <Footer/>
      </div>
  )
};

export default Home;
