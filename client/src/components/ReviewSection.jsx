import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "John Doe",
    review:
      "The ayurvedic massage oil was amazing and helped relieve my stress!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "The herbal supplements improved my digestion. Highly recommend!",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    review: "An excellent experience! The staff was very professional.",
    rating: 5,
  },
  {
    name: "Bob Brown",
    review: "I loved the herbal tea. It was refreshing and soothing.",
    rating: 4,
  },
  {
    name: "Mike Wilson",
    review: "The yoga classes are transformative. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Connor",
    review: "A wonderful place for healing. The staff is very caring.",
    rating: 5,
  },
  {
    name: "David Smith",
    review: "I felt rejuvenated after the Panchakarma therapy!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    review: "The consultation was very informative and helpful.",
    rating: 4,
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedReviews = reviews.slice(currentIndex, currentIndex + 4);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= reviews.length ? 0 : prevIndex + 4
    );
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto rounded-lg p-6  shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Happy Customers
      </h2>
      <div className="space-y-4 mb-4">
        {displayedReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {review.name}
            </h3>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="mt-2 text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevReview}
          className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
        >
          &#8592; Previous
        </button>
        <button
          onClick={nextReview}
          className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
