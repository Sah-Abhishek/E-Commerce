import React, { useState, useEffect } from "react";

const ServiceCard = ({ service }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md relative">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={service.image}
        alt={service.name}
      />
      <div className="p-4">
        <h5 className="text-xl text-black font-semibold text-center">{service.name}</h5>
        <p className="text-yellow-500 text-center mb-4">
          {"★".repeat(service.rating)}
          {"☆".repeat(5 - service.rating)}
        </p>
        <p className="text-gray-600 text-center mb-4">{service.description}</p>
        <button
          className="w-full text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Book Appointment
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
            <p className="mb-4">{service.description}</p>
            <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
