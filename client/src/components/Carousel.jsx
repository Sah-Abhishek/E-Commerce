import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.webp"
import bg2 from "../assets/bg2.webp"
import bg3 from "../assets/bg3.webp"
import bg4 from "../assets/bg4.webp"

const Carousel = () => {
  const images = [ bg1,bg2,bg3,bg4 ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        height: "100vh",
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Darkening the images */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="text-white z-10">
          <h1 className="text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-lg">
            Welcome to Ayurayurveda
          </h1>
          <p className="text-lg md:text-xl mb-4 md:mb-6 drop-shadow-md">
            Explore the best ayurvedic products and services
          </p>
        </div>
      </div>
      <Link to="/contactus">
        <button className="absolute bottom-4 right-4 bg-transparent backdrop-blur-md border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blue-500 transition duration-300">
          Book Appointment
        </button>
      </Link>
    </div>
  );
};

export default Carousel;
