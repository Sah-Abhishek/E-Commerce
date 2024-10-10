import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServicesCard";
import ReviewSection from "../components/ReviewSection";
import VideoFile from "../assets/video1.mp4";
import AyurvedicServicesCard from "../components/ayurvedicServicesCard";

const Homev1 = () => {
  const products = [
    {
      name: "Ayurvedic Shampoo",
      rating: 4,
      originalPrice: "250",
      currentPrice: "200",
      description:
        "A refreshing ayurvedic shampoo made from natural ingredients.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ayurvedic Massage Oil",
      rating: 5,
      originalPrice: "400",
      currentPrice: "350",
      description:
        "Relaxing massage oil for stress relief and improved circulation.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Herbal Face Pack",
      rating: 4,
      originalPrice: "300",
      currentPrice: "250",
      description: "A natural face pack for glowing skin.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Detox Tea",
      rating: 5,
      originalPrice: "150",
      currentPrice: "120",
      description: "A soothing tea blend for detoxification.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Herbal Hair Oil",
      rating: 4,
      originalPrice: "220",
      currentPrice: "180",
      description: "A nourishing hair oil for strong and healthy hair.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ayurvedic Toothpaste",
      rating: 5,
      originalPrice: "100",
      currentPrice: "80",
      description: "A natural toothpaste for healthy gums and teeth.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const services = [
    {
      name: "Ayurvedic Consultation",
      description: "Personalized consultation for health and wellness.",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      name: "Panchakarma Therapy",
      description: "Detoxification and rejuvenation therapy.",
      image: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      name: "Yoga Classes",
      description: "Yoga sessions for physical and mental well-being.",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      name: "Nutrition Guidance",
      description: "Customized nutrition plans based on Ayurvedic principles.",
      image: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      name: "Herbal Therapies",
      description: "Natural treatments using Ayurvedic herbs.",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      name: "Detox Programs",
      description: "Comprehensive detox programs for overall wellness.",
      image: "https://via.placeholder.com/150",
      rating: 4,
    },
  ];

  const ayurvedicServices = [
    {
      name: "Panchakarma Detox Therapy",
      image: "https://via.placeholder.com/300x200?text=Panchakarma",
      description:
        "Panchakarma is a comprehensive Ayurvedic detoxification therapy aimed at cleansing the body from toxins, restoring balance, and rejuvenating overall health. It includes five procedures—Vamana (emesis), Virechana (purgation), Nasya (nasal administration), Basti (enema), and Raktamokshana (bloodletting).",
    },
    {
      name: "Abhyanga Massage Therapy",
      image: "https://via.placeholder.com/300x200?text=Abhyanga+Massage",
      description:
        "Abhyanga is a traditional full-body warm oil massage designed to calm the mind, nourish the skin, and increase circulation. It helps reduce stress, relieve muscle tension, and promote deep relaxation using Ayurvedic herbal oils.",
    },
    {
      name: "Shirodhara Therapy",
      image: "https://via.placeholder.com/300x200?text=Shirodhara",
      description:
        "Shirodhara involves a continuous flow of warm medicated oil on the forehead, known to enhance mental clarity and relieve stress. It is highly effective for conditions such as insomnia, anxiety, and headaches.",
    },
    {
      name: "Ayurvedic Diet & Nutrition Consultation",
      image: "https://via.placeholder.com/300x200?text=Ayurvedic+Diet",
      description:
        "Personalized diet consultations are provided based on Ayurvedic principles, focusing on balancing the body's constitution (Doshas) with proper nutrition and lifestyle practices. This service helps with weight management, digestion, and overall vitality.",
    },
    {
      name: "Herbal Steam Therapy (Swedana)",
      image: "https://via.placeholder.com/300x200?text=Herbal+Steam",
      description:
        "Swedana is an herbal steam therapy that opens up the body's channels and pores, encouraging the release of toxins. It is beneficial for improving circulation, relieving muscle stiffness, and supporting respiratory health.",
    },
  ];

  return (
    <>
      <section className="w-full h-screen overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover z-0"
        >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10  text-white bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold">Welcome to Ayurayurveda</h1>
            <p className="mt-4 text-lg">
              Explore the best ayurvedic products and services
            </p>
          </div>
          <div className=" h-screen text-center border border-white">
            Hey there this is new page
          </div>
        </div>
      </section>
    </>
  );
};

export default Homev1;
