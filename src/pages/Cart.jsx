import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto mt-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md flex justify-between items-center mb-4 rounded-lg">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-6 text-right">Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;