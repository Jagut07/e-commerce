import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <img src={product.image} alt={product.title} className="w-48 h-48 object-cover" />
      <h2 className="text-3xl font-bold mt-4 text-blue-600">{product.title}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button 
        onClick={() => dispatch(addToCart(product))} 
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;