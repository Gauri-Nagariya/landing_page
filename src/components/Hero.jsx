import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="bg-gray-50 py-32 flex flex-col h-163 md:flex-row max-w-full bg-cover pl-30 items-center text-center md:text-left sm:text-left"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center top 110px",
      }}
    >
      <div className="md:w-1/2 pl-6  pt-20 pr-10  mr-16">
        <h1 className="text-5xl font-lg mb-8 text-white">Love Your Smile.</h1>
          <p className="mb-8 text-white/90 md:pr-60 px-4 md:px-0">
          It's a confidence booster. Our easy-to-use applicator ensures even coverage, making it perfect for daily use.
        </p>
        <button className="bg-[#104B4F] text-white px-6 py-3 hover:bg-teal-800">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 p-6">
      </div>
    </section>
  );
};

export default Hero;
