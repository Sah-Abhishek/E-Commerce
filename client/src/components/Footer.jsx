import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        <div className="mb-6 md:mb-0 flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">AYURAYURVEDA</h2>
          <p className="text-lg">
            Aayur Ayurveda & Panchakarma Clinic under the guidance of Dr. Smriti
            Sharma (Ayurvedic physician)
          </p>
        </div>

        <div className="mb-6 md:mb-0 flex-1">
          <h2 className="text-xl font-bold mb-4">Contacts</h2>
          <div className="text-lg">
            <p>
              <strong>Address:</strong> Plot No. 118, Sector-4 Vaishali,
              Gzb-201010
            </p>
            <p>
              <strong>Phone:</strong> Toll Free 8287153192, 9811403749
            </p>
            <p>
              <strong>Email:</strong> info@ayurayurveda.co.in
            </p>
            <p>
              <strong>Working Days/Hours:</strong> Mon - Sun / 10:00 AM - 7:00
              PM
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-blue-500 text-2xl" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-500 text-2xl" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-400 text-2xl" />
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0 flex-1">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-lg space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products-services" className="hover:underline">
                Products & Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
