import React from "react";
import P1 from "../assets/AboutImg.jpg";
import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpeg";
import award3 from "../assets/award3.jpg";
import award4 from "../assets/award4.jpeg";
import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpeg";
import cert3 from "../assets/certificate3.jpg";
import cert4 from "../assets/certificate4.jpeg";

const About = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12">
      <section className="flex justify-center items-center px-20 h-screen md:text-left md:flex md:space-x-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Know More About Aayur Ayurveda & Panchkarma Clinic
          </h2>
          <p className="text-xl font-semibold text-slate-200 mb-4">
            Aayur Ayurveda & Panchkarma Clinic, under the guidance of Dr. Smriti
            Sharma (Ayurvedic physician), has been offering “Holistic Ayurvedic
            Therapies” for the well-being of mankind for the last 15 years.
          </p>
          <p className="text-lg text-slate-300 mb-6">
            Ayurveda, Yoga, Meditation, and Naturopathy are time-tested ancient
            systems of medicine that help detoxify the body, mind, and soul and
            balance our Inner Chakras for well-being. It promotes social,
            spiritual, emotional, and psychological well-being. Ayur wellness
            offers a blend of Ayurveda rejuvenation and "Panchakarma" Therapies
            that can cure many chronic ailments.
          </p>
          <div className="flex justify-around mt-6 mb-4">
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                15+
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                Business Years
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                30+
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                Doctors
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                10000+
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-10">
        <h2 className="text-3xl font-bold text-center mb-6">Awards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src={award1}
            alt="Award 1"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award2}
            alt="Award 2"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award3}
            alt="Award 3"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award4}
            alt="Award 4"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award1}
            alt="Award 1"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award2}
            alt="Award 2"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award3}
            alt="Award 3"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={award4}
            alt="Award 4"
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </section>

      <section className="m-10">
        <h2 className="text-3xl p-6 font-bold text-center mb-6">
          Certificates
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            src={cert1}
            alt="Certificate 1"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert3}
            alt="Certificate 2"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert1}
            alt="Certificate 1"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert3}
            alt="Certificate 2"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert2}
            alt="Certificate 3"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert4}
            alt="Certificate 4"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert2}
            alt="Certificate 3"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
          <img
            src={cert4}
            alt="Certificate 4"
            className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
