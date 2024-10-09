import React, { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Calculate the discount percentage
  const discountPercentage = Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
      100
  );

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md relative">
      {/* Discount Box */}
      <div className="absolute top-2 left-2 bg-red-600 bg-opacity-75 text-white text-xs font-bold py-1 px-2 rounded">
        {discountPercentage}% OFF
      </div>
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h5 className="text-xl text-white font-semibold">{product.name}</h5>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-lg font-bold text-green-500">
            ₹{product.currentPrice}
          </span>
        </div>
        <button
          className="mt-3 w-full text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          View Details
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal on click outside card
        >
          <div
            className="bg-gray-800 rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">
              {product.name}
            </h2>
            <img
              className="rounded-lg w-full h-64 object-cover mb-4"
              src={product.image}
              alt={product.name}
            />
            <p className="mb-4 text-gray-300">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="text-lg font-bold text-green-500">
                ₹{product.currentPrice}
              </span>
            </div>
            <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
