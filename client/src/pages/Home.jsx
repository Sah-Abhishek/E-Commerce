import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServicesCard";
import ReviewSection from "../components/ReviewSection";
import VideoFile from "../assets/video1.mp4";

const Home = () => {
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

  return (
    <>
      <section className="w-full h-screen overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center w-full h-full text-white bg-black bg-opacity-30">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">Welcome to Ayurayurveda</h1>
            <p className="mt-4 text-lg">
              Explore the best ayurvedic products and services
            </p>
          </div>
        </div>
      </section>

      {/* About Section*/}
      <section className="flex justify-center items-center pt-16 px-20 h-screen md:text-left md:flex md:space-x-6">
        <div className=" flesx justify-center  md:w-3/4 text-center ">
          <h2 className="text-3xl font-bold mb-7">
            About Us
          </h2>

          <p className="text-lg text-slate-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam in minus laboriosam fugiat molestias ipsam fugit, non distinctio tempora sunt corporis, ullam exercitationem perspiciatis e blanditiis possimus non nobis ducimus! Vitae, repudiandae dolorem excepturi autem, voluptas ut id nisi debitis sapiente earum ducimus architecto blanditiis neque itaque iste amet impedit assumenda perferendis ipsam, suscipit aperiam nam. Ipsum labore, tempora consequatur minus eligendi at enim obcaecati possimus est ullam quo excepturi quas commodi quis cumque itaque totam assumenda unde incidunt sequi? Nobis quibusdam soluta rem excepturi et, deserunt cum debitis  odio rerum ex, facere quis, officiis molestias nam beatae expedita cumque eligendi doloremque at accusamus iusto necessitatibus tempore quisquam ab voluptatum laudantium. Assumenda exercitationem animi rerum minus eos, culpa, recusandae iure nemo, ducimus maiores aliquam eveniet ipsa! Obcaecati aut quam esse itaque sit. Possimus, ex, a quod dicta debitis labore officiis error porro earum delectus maxime soluta reprehenderit impedit quam, reiciendis ab ipsa asperiores vero.
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

      <section className="container mx-auto">
        {/* Featured Products Section */}
        <div className="pt-4">
          <h1 className="text-3xl font-bold mb-6 text-center ">
            Featured Products
          </h1>
          <div className="container mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {products.map((product, index) => (
                <div key={index} className="popUpAnimtion">
                  <ProductCard key={index} product={product} />
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/products-services"
            className="text-blue-500 hover:underline mb-4 inline-block text-center w-full"
          >
            Click here to view more products
          </Link>
        </div>

        {/* Featured Services Section */}
        <h1 className="text-3xl font-bold mt-6 mb-6 text-center">
          Our Services
        </h1>
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <div key={index} className="popUpAnimtion">
                <ServiceCard key={index} service={service} />
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/products-services"
          className="text-blue-500 hover:underline mb-4 inline-block text-center w-full"
        >
          Click here to view more services
        </Link>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-4 px-4 md:px-8 lg:px-12">
        <ReviewSection />
      </section>
    </>
  );
};

export default Home;
