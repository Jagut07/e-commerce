import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Shop</Link>
      <div>
        <Link to="/products" className="mx-2 hover:underline">Products</Link>
        <Link to="/cart" className="mx-2 hover:underline">Cart</Link>
        <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;