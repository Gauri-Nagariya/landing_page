import React from "react";
import best1 from "../assets/best-seller1.png";
import best2 from "../assets/best-seller2.png";
import best3 from "../assets/best-seller3.png";

const BestSellers = () => {
  const products = [
    {
      img: best1,
      name: "PureClean Toothbrush",
      price: "$138",
      desc: "Featuring ultra-soft bristles that gently sweep away plaque and debris.",
    },
    {
      img: best2,
      name: "Product Name",
      price: "$138",
      desc: "Short description of the product or service of the website",
    },
    {
      img: best3,
      name: "Product Name",
      price: "$138",
      desc: "Short description of the product or service of the website",
    },
  ];

  return (
    <section className="bg-[#A7BCB8] py-16 md:py-24 sm:px-10 text-center">
      
      <h2 className="text-3xl sm:text-4xl font-lg mb-4 px-4 md:px-0">
        Explore our best-sellers
      </h2>

      <p className="text-gray-800 mb-12 md:mb-16 max-w-xl mx-auto px-4 sm:px-12">
        Each product is crafted with the finest materials and backed by rave
        reviews from our loyal customers.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-4 sm:px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-[#FAF7F2] p-4 sm:p-6 transform cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
              <img
                src={p.img}
                alt={p.name}
                className="w-full aspect-square object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="font-medium text-sm sm:text-base">{p.name}</h3>
              <span className="text-sm sm:text-base">{p.price}</span>
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 text-left">
              {p.desc}
            </p>

            <button className="w-full bg-[#104B4F] text-white py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-800 cursor-pointer transition-colors duration-300">
              Shop Now
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BestSellers;
