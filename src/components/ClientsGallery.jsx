import React from "react";
import img1 from "../assets/client1.png";
import img2 from "../assets/client2.png";
import img3 from "../assets/client3.png";
import img4 from "../assets/client4.png";
import img5 from "../assets/client5.png";
import img6 from "../assets/client6.png";

const ClientsGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl font-lg mb-4 px-4 md:px-0">
        Be a part of the PureBrush family!
      </h2>

      <p className="text-gray-800 text-sm sm:text-md mb-10 md:mb-14 max-w-xl mx-auto px-4 sm:px-0">
        Our feed is filled with inspiration to help you<br />
        maintain a healthy and beautiful smile
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105 cursor-pointer rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsGallery;
