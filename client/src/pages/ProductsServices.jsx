import React from "react";
import ProductCard from "../components/ProductCard";
import ServicesCard from "../components/ServicesCard";

const items = [
  {
    name: "Ayurvedic Shampoo",
    rating: 4,
    originalPrice: 25.0,
    currentPrice: 20.0,
    description:
      "A refreshing ayurvedic shampoo made from natural ingredients.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayurvedic Massage Oil",
    rating: 5,
    originalPrice: 40.0,
    currentPrice: 35.0,
    description:
      "Relaxing massage oil for stress relief and improved circulation.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Herbal Face Pack",
    rating: 4,
    originalPrice: 15.0,
    currentPrice: 12.0,
    description: "A rejuvenating herbal face pack for glowing skin.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Detox Tea",
    rating: 5,
    originalPrice: 30.0,
    currentPrice: 25.0,
    description: "A soothing detox tea to cleanse the body.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Turmeric Capsules",
    rating: 4,
    originalPrice: 20.0,
    currentPrice: 18.0,
    description: "Natural turmeric capsules for anti-inflammatory benefits.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayurvedic Body Scrub",
    rating: 5,
    originalPrice: 28.0,
    currentPrice: 24.0,
    description: "An exfoliating body scrub with natural herbs.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Aromatherapy Oil",
    rating: 4,
    originalPrice: 35.0,
    currentPrice: 30.0,
    description: "Essential oil blend for relaxation and aromatherapy.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Herbal Hair Oil",
    rating: 5,
    originalPrice: 25.0,
    currentPrice: 20.0,
    description: "Nourishing hair oil to promote hair health.",
    image: "https://via.placeholder.com/150",
  },
];

const services = [
  {
    name: "Full Body Ayurvedic Massage",
    rating: 5,
    originalPrice: 100.0,
    currentPrice: 90.0,
    description: "A relaxing full-body ayurvedic massage with herbal oils.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayurvedic Consultation",
    rating: 4,
    originalPrice: 50.0,
    currentPrice: 45.0,
    description:
      "Consult with a certified ayurvedic expert for personalized advice.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayurvedic Cold Remedy",
    rating: 4,
    originalPrice: 15.0,
    currentPrice: 12.0,
    description: "Natural remedy to alleviate cold symptoms.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ginger Herbal Tea",
    rating: 5,
    originalPrice: 22.0,
    currentPrice: 18.0,
    description: "Spicy ginger tea for warmth and digestion.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ayurvedic Foot Cream",
    rating: 4,
    originalPrice: 18.0,
    currentPrice: 15.0,
    description: "Moisturizing cream for soft and smooth feet.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Herbal Toothpaste",
    rating: 5,
    originalPrice: 10.0,
    currentPrice: 8.0,
    description: "Natural toothpaste with ayurvedic ingredients.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Coconut Oil",
    rating: 4,
    originalPrice: 12.0,
    currentPrice: 10.0,
    description: "Pure coconut oil for cooking and skin care.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Brahmi Powder",
    rating: 5,
    originalPrice: 15.0,
    currentPrice: 12.0,
    description: "Herbal powder for mental clarity and focus.",
    image: "https://via.placeholder.com/150",
  },
];

const ProductsServicesPage = () => {
  return (
    <div className="container mx-auto py-6 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold pt-16 mb-6" id="products">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {items.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6" id="services">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ProductsServicesPage;
