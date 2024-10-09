import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded"
              rows="5"
              required
            />
          </div>
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
