import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover mr-4"
        />
        <div>
          <h5 className="text-lg font-semibold">{item.name}</h5>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-semibold">${item.price}</span>
        <button className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
