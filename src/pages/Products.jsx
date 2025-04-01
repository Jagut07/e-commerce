import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the JSON Server API
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data)); // Set the product data to the state
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Loop through the products and display each one */}
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
          {/* Image of the product */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-32 h-32 mx-auto object-cover rounded-lg" 
          />
          
          {/* Product Title */}
          <h3 className="font-bold mt-2 text-lg">{product.title}</h3>
          
          {/* Product Price */}
          <p className="text-gray-600">${product.price}</p>
          
          {/* Link to the Product Detail page */}
          <Link 
            to={`/products/${product.id}`} 
            className="text-blue-500 hover:underline mt-2 block"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
