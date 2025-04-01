import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Cart from "./pages/Cart";
;
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/ContactUs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
);
    </>
  )
}

export default App
