import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart"; 
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";


import "./styles/app.scss";
import "./styles/myHeader.scss";
import "./styles/myHome.scss";
import "./styles/founder.scss";
import "./styles/myMenu.scss";
import "./styles/myFooter.scss";
import "./styles/myContact.scss";
import "./styles/myCart.scss";
import "./styles/myShipping.scss";
import "./styles/myLogin.scss";
import "./styles/myProfile.scss";
import "./styles/myTable.scss";
import "./styles/myOrderDetails.scss";
import "./styles/myAbout.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myOrder" element={<MyOrders/>} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
