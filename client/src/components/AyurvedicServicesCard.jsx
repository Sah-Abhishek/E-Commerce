import React from "react";

const AyurvedicServicesCard = ({ ayurvedicServices, index }) => {
  // Determine the animation class and layout based on index
  const animationClass = index % 2 === 0 ? "slide-right" : "slide-left";
  const isEvenIndex = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 ${animationClass}`}
    >
      {/* Conditionally render image and text based on the index */}
      {isEvenIndex ? (
        <>
          <div className="md:w-1/3">
            <img
              src={ayurvedicServices.image}
              alt={ayurvedicServices.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {ayurvedicServices.name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {ayurvedicServices.description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {ayurvedicServices.name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {ayurvedicServices.description}
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src={ayurvedicServices.image}
              alt={ayurvedicServices.name}
              className="object-cover w-full h-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AyurvedicServicesCard;



// import React from "react";

// const AyurvedicServicesCard = ({ ayurvedicServices, index }) => {
//   const animationClass = index % 2 === 0 ? "slide-right" : "slide-left";

//   return (
//     <div
//       className={flex flex-col md:flex-row border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 ${animationClass}}
//     >
//       <div className="md:w-1/3">
//         <img
//           src={ayurvedicServices.image}
//           alt={ayurvedicServices.name}
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="p-4 md:w-2/3">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//           {ayurvedicServices.name}
//         </h2>
//         <p className="mt-2 text-gray-600 dark:text-gray-300">
//           {ayurvedicServices.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AyurvedicServicesCard;