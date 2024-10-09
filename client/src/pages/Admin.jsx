import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [carouselImages, setCarouselImages] = useState([
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ]);
  const [awards, setAwards] = useState(["award1.jpg", "award2.jpg"]);
  const [certificates, setCertificates] = useState(["cert1.jpg", "cert2.jpg"]);
  const [products, setProducts] = useState(["Product 1", "Product 2"]);
  const [services, setServices] = useState(["Service 1", "Service 2"]);
  const [orders, setOrders] = useState(["Order 1", "Order 2"]);
  const [appointments, setAppointments] = useState([
    "Appointment 1",
    "Appointment 2",
  ]);

  return (
    <div className="flex pt-16">
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="#carousel" className="hover:text-blue-400">
              Carousel Images
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#awards" className="hover:text-blue-400">
              Awards
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#certificates" className="hover:text-blue-400">
              Certificates
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#products" className="hover:text-blue-400">
              Products
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#orders" className="hover:text-blue-400">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#appointments" className="hover:text-blue-400">
              Appointments
            </Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6">

        {/* Carousel Images Section */}
        <section id="carousel" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Carousel Images</h2>
          <div>
            {carouselImages.map((image, index) => (
              <div key={index} className="mb-2">
                <img
                  src={image}
                  alt={`Carousel ${index + 1}`}
                  className="w-32 h-32 object-cover"
                />
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Image
            </button>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Awards</h2>
          <div>
            {awards.map((award, index) => (
              <div key={index} className="mb-2">
                <img
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-32 h-32 object-cover"
                />
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Award
            </button>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Certificates</h2>
          <div>
            {certificates.map((cert, index) => (
              <div key={index} className="mb-2">
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-32 h-32 object-cover"
                />
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Certificate
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Products</h2>
          <div>
            {products.map((product, index) => (
              <div key={index} className="mb-2">
                <p>{product}</p>
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Product
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <div>
            {services.map((service, index) => (
              <div key={index} className="mb-2">
                <p>{service}</p>
              </div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Service
            </button>
          </div>
        </section>

        {/* Orders Section */}
        <section id="orders" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Orders</h2>
          <div>
            {orders.map((order, index) => (
              <div key={index} className="mb-2">
                <p>{order}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appointments Section */}
        <section id="appointments" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Appointments</h2>
          <div>
            {appointments.map((appointment, index) => (
              <div key={index} className="mb-2">
                <p>{appointment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
