import React from "react";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    name: "Ayurvedic Shampoo",
    price: 20.0,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ayurvedic Massage Oil",
    price: 35.0,
    image: "https://via.placeholder.com/100",
  },
];

const CartPage = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-semibold">Total: $55.00</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
