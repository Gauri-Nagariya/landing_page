// import React from "react";
// import ctaImg from "../assets/cta.png";

// const Subscribe = () => {
//   return (
//     <section
//       className="relative h-130 flex items-start justify-start pt-22 pl-22"
//       style={{
//         backgroundImage: `url(${ctaImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-linear-to-r from-black/10 to-black/5"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl  px-6 text-white">
//         <h2 className="text-4xl md:text-4xl font-lg mb-4">
//           Get Yours Today!
//         </h2>

//         <p className="max-w-md mb-8 text-base text-white/90">
//           Don’t wait to experience the best in oral care! Click “Buy now”
//           to secure your favorites and enjoy a brighter, healthier smile.
//         </p>

//         <button className="bg-white text-gray-900 px-8 py-3 text-sm transition-transform duration-200 hover:scale-95">
//           Buy now with 20% off
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Subscribe;


import React from "react";
import ctaImg from "../assets/cta.png";

const Subscribe = () => {
  return (
    <section
      className="relative h-96 md:h-130 flex items-center md:items-start justify-center md:justify-start px-6 md:pt-22 md:pl-22"
      style={{
        backgroundImage: `url(${ctaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/10 to-black/5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-6xl text-center md:text-left text-white">
        <h2 className="text-2xl md:text-4xl font-lg mb-4">
          Get Yours Today!
        </h2>

        <p className="mb-6 md:mb-8 text-sm md:text-base text-white/90 md:pr-140">
          Don’t wait to experience the best in oral care! Click “Buy now”
          to secure your favorites and enjoy a brighter, healthier smile.
        </p>

        <button className="bg-white text-gray-900 px-6 md:px-8 py-3 text-sm transition-transform duration-200 hover:scale-95">
          Buy now with 20% off
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
