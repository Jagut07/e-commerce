import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  // Static array of product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace the fetch call with static data
    const productData = [
      {
        id: 1,
        title: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150", // Placeholder image
        description: "This is a description for Product 1",
      },
      {
        id: 2,
        title: "Product 2",
        price: 150,
        image: "https://via.placeholder.com/150", // Placeholder image
        description: "This is a description for Product 2",
      },
      {
        id: 3,
        title: "Product 3",
        price: 200,
        image: "https://via.placeholder.com/150", // Placeholder image
        description: "This is a description for Product 3",
      },
    ];

    // Simulating API response
    setProducts(productData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Loop through the products and display each one */}
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
          {/* Display product image */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-32 h-32 mx-auto object-cover rounded-lg" 
          />
          {/* Product Title */}
          <h3 className="font-bold mt-2 text-lg">{product.title}</h3>
          {/* Product Price */}
          <p className="text-gray-600">${product.price}</p>
          {/* Link to Product Detail page */}
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
