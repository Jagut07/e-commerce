import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Static product data (same as in Products.jsx)
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      description: "This is a description for Product 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 150,
      image: "https://via.placeholder.com/150",
      description: "This is a description for Product 2",
    },
    {
      id: 3,
      title: "Product 3",
      price: 200,
      image: "https://via.placeholder.com/150",
      description: "This is a description for Product 3",
    },
  ];

  // Find the product with the matching ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-64 h-64 object-cover" />
      <p>{product.description}</p>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
