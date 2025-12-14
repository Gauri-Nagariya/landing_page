import React from "react";
import img1 from "../assets/improved-oral-health.png";
import img2 from "../assets/enhanced-appearance.png";
import img3 from "../assets/brush-boosts.png";

const SectionCard = () => {
  return (
    <section className="grid grid-cols-2 auto-rows-fr bg-[#F0EBE5]">

      <div className="h-56 md:h-auto">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-56 md:h-auto p-6 md:p-12 flex flex-col justify-center pl-6 md:pl-30">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-6">
          Improved Oral Health
        </h2>
        <p className="mb-3 md:mb-6 pr-0 md:pr-65 text-sm md:text-base">
          Maintain good oral hygiene by preventing tooth decay and reducing the risk of gum disease.
        </p>
        <button className="w-fit px-4 py-2 md:px-6 md:py-3 bg-[#104B4F] text-white hover:bg-teal-800">
          Shop Now
        </button>
      </div>

      <div className="h-56 md:h-auto p-6 md:p-12 flex flex-col justify-center pl-6 md:pl-30">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-6">
          Enhanced Appearance
        </h2>
        <p className="mb-3 md:mb-6 pr-0 md:pr-65 text-sm md:text-base">
          A whiter, more attractive smile can boost your confidence and leave a positive impression.
        </p>
        <button className="w-fit px-4 py-2 md:px-6 md:py-3 bg-[#104B4F] text-white hover:bg-teal-800">
          Shop Now
        </button>
      </div>

      <div className="h-56 md:h-auto">
        <img
          src={img2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-56 md:h-auto">
        <img
          src={img3}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-56 md:h-auto p-6 md:p-12 flex flex-col justify-center pl-6 md:pl-30">
        <h2 className="text-xl md:text-4xl mb-3 md:mb-6">
          Fresh Breath
        </h2>
        <p className="mb-3 md:mb-6 pr-0 md:pr-65 text-sm md:text-base">
          Provide a pleasant, long-lasting freshness, contributing to better overall oral hygiene.
        </p>
        <button className="w-fit px-4 py-2 md:px-6 md:py-3 bg-[#104B4F] text-white hover:bg-teal-800">
          Shop Now
        </button>
      </div>

    </section>
  );
};

export default SectionCard;
