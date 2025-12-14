import React from "react";
import instagram from "../assets/instagram.png";
import wa from "../assets/wa.png";
import fb from "../assets/fb.png";

const Footer = () => {
  return (
    <footer className="bg-[#fefbf3] py-16 text-center text-black">
      <h2 className="text-5xl sm:text-6xl font-lg pb-8 sm:pb-12">PureBrush</h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-20 md:text-lg text-md mb-8 sm:mb-12">
        <a href="#" className="hover:underline">About us</a>
        <a href="#" className="hover:underline">Categories</a>
        <a href="#" className="hover:underline">Benefits</a>
        <a href="#" className="hover:underline">Best-sellers</a>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-182 px-4 sm:px-6">
        
        <div className="flex w-full md:w-auto justify-center md:justify-start gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-[#7eafaf] w-full md:w-72 pl-4 py-3 focus:outline-none rounded"
          />
          <button className="bg-[#234343] text-white px-4 py-2 hover:bg-teal-800 rounded">
            Subscribe
          </button>
        </div>

        <div className="flex gap-4 md:gap-8 justify-center md:justify-end mt-4 md:mt-0">
          <a href="#"><img src={instagram} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
          <a href="#"><img src={wa} alt="WhatsApp" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
          <a href="#"><img src={fb} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
