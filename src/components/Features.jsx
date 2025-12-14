// import React from "react";
// import hero from "../assets/hero.png";
// import fortune from "../assets/fortune.png";
// import rs from "../assets/rs.png";
// import tree from "../assets/tree.png";
// import ad from "../assets/ad.png";
// import domino from "../assets/domino.png";

// const Features = () => {
//   return (
//     <section className="bg-amber-50 py-16 flex flex-row  text-center h-80 md:flex-row max-w-full bg-center bg-cover gap-16 justify-center">
//       <div className=" h-44 w-40 ">
//         <h3 className="py-6">
//           <img
//             className="items-center flex mx-[3.5vw]"
//             src={fortune}
//             alt=""
//             srcset=""
//           />
//         </h3>
//         <p>
//           It effectively fights cavities, reduces plaque, and promotes overall
//           oral health.
//         </p>
//       </div>
//       <div className=" h-40 w-42 ">
//         <h3 className="py-6">
//           <img
//             className="items-center flex mx-[3.5vw]"
//             src={rs}
//             alt=""
//             srcset=""
//           />
//         </h3>{" "}
//         <p>
//           “Trusted by healthcare professionals, PureBrush is a reliable choice
//           for daily care.”
//         </p>
//       </div>
//       <div className=" h-40 w-43 ">
//         <h3 className="py-3">
//           <img
//             className="items-center flex mx-[3.5vw]"
//             src={tree}
//             alt=""
//             srcset=""
//           />
//         </h3>{" "}
//         <p>
//           “At our store, PureBrush’s toothpaste has consistently been a
//           top-selling product”
//         </p>
//       </div>
//       <div className=" h-40 w-40 ">
//         <h3 className="py-3">
//           <img
//             className="items-center flex mx-[3.5vw]"
//             src={domino}
//             alt=""
//             srcset=""
//           />
//         </h3>{" "}
//         <p>“It complements our commitment to high-quality, natural products”</p>
//       </div>
//       <div className=" h-40 w-43 ">
//         <h3 className="py-3">
//           <img
//             className="items-center flex mx-[3.5vw]"
//             src={ad}
//             alt=""
//             srcset=""
//           />
//         </h3>{" "}
//         <p>
//           “It's a product we recommend to consumers seeking a reliable
//           toothbrushes.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Features;


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
    <section className="bg-amber-50 py-16 px-4 sm:px-6 md:px-12 max-w-full">
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
