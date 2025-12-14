import React from "react";
import fortune from "../assets/fortune.png";
import rs from "../assets/rs.png";
import tree from "../assets/tree.png";
import ad from "../assets/ad.png";
import domino from "../assets/domino.png";

const Features = () => {
  const features = [
    {
      img: fortune,
      desc: "It effectively fights cavities, reduces plaque, and promotes overall oral health.",
    },
    {
      img: rs,
      desc: "Trusted by healthcare professionals, PureBrush is a reliable choice for daily care.",
    },
    {
      img: tree,
      desc: "At our store, PureBrush’s toothpaste has consistently been a top-selling product.",
    },
    {
      img: domino,
      desc: "It complements our commitment to high-quality, natural products.",
    },
    {
      img: ad,
      desc: "It's a product we recommend to consumers seeking reliable toothbrushes.",
    },
  ];

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 md:px-12 max-w-full md:py-20">
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center gap-8 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center max-w-xs sm:max-w-50">
            <img src={f.img} alt="" className="mb-4 w-16 h-16 sm:w-20 sm:h-20 object-contain" />
            <p className="text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
