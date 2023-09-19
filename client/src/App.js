import About from "./pages/About";
import Carts from "./pages/Carts";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/cartergory/:cartergoryId" element={user ? <Carts/> : <Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/login" element={user ? <Home/> : <Login/>}/>
       <Route path="/register" element={user ? <Home/> : <Register/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/product/:productId" element={user ? <Product/> : <Login/>}/>
       <Route path="/pay" element={<Pay/>}/>
       <Route path="/success" element={<Success/>}/>
     </Routes>
   </Router>
  );
}

export default App;
