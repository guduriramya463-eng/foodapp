import Nonveg from "./Nonveg";
import Veg from "./Veg";
import Desserts from "./Desserts";
import Milkshakes from "./Milkshakes";
import Pastries from "./Pastries";
import Tiffin from "./Tiffin";

import Home from "./Home";
import "./App.css";
import Scoops from "./Scoops";
import Soup from "./Soup";
import Cart from "./Cart";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./profile";
import BlogPost from "./BlogPost";
import Orders from "./Orders";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./login";
import About from "./About";
import Addition from "./Addition";
function App() {
  
 let cartItems = useSelector((state) => state.cart);

let totalQuantity = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" ><i className="fa-solid fa-house"></i>Home</Link>
        <Link to="/veg"><i className="fa-solid fa-apple-whole"></i>Veg</Link>
        <Link to="/nonveg"><i className="fa-solid fa-drumstick-bite"></i>Nonveg</Link>
        <Link to="/desserts"><i className="fa-solid fa-cookie"></i>Desserts</Link>
        <Link to="/milkshakes"><i className="fa-solid fa-martini-glass-citrus"></i>Milkshakes</Link>
        <Link to="/pastries"><i className="fa-solid fa-cake-candles"></i>Pastries</Link>
        <Link to="/tiffin"><i className="fa-solid fa-bowl-food"></i>Tiffin</Link>
        
        <Link to="/scoops"><i className="fa-solid fa-ice-cream"></i>Scoops</Link>
        <Link to="/soup"><i className="fa-solid fa-mug-hot"></i>Soup</Link>
        
       {/* <Link to="/Contact">Contact Us</Link> */}
        <Link to="/cart">
  <i className="fa-solid fa-cart-arrow-down"></i> Cart {totalQuantity}
       </Link>
        <Link to="/Orders"><i class="fa-solid fa-bag-shopping"></i>Orders</Link>
          {/* <Link to="/Register"><i class="fa-solid fa-file"></i>Register</Link>
       <Link to="/Login"><i class="fa-brands fa-wpforms"></i>Login</Link>
       <Link to="/About">About Us</Link> */}
       {/* <Link to="/Addition">Add</Link> */}
{/* <Link to="/blog/first-post">First Post</Link>
<Link to="/blog/Second-post">Second Post</Link>
<Link to="/blog/Third-post">Third Post</Link> */}
      </nav>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/milkshakes" element={<Milkshakes />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/tiffin" element={<Tiffin />} />
        
        <Route path="/scoops" element={<Scoops/>}/>
        <Route path="/soup" element={<Soup/>}/>
        
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/blog/:slug" element={<BlogPost/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>} />      
         <Route path="/Orders" element={<Orders/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        {/* <Route path="/Addition" element={<Addition/>}/> */}
       
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
