import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "After just two weeks, my teeth are noticeably whiter",
      name: "Sarah Han",
    },
    {
      text: "I've tried many toothbrushes over the years, but PureBrush stands out.",
      name: "Johny Matt",
    },
    {
      text: "I love that they're made from sustainable materials",
      name: "Amanda Christen",
    },
  ];

  return (
    <section className="bg-[#A7BCB8] py-16 md:py-26 text-center">
      <h2 className="text-2xl md:text-4xl font-xl mb-10 md:mb-16">
        What our clients say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-6">
        {testimonials.map((item, index) => (
          <div key={index}>
            
            <div className="flex justify-center mb-4 md:mb-6">
              {Array(5).fill(0).map((_, i) => (
                <span
                  key={i}
                  className="text-teal-900 text-2xl md:text-3xl"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="mb-4 md:mb-6 text-gray-800 leading-relaxed font-semibold px-2 md:px-4 text-base md:text-lg">
              “{item.text}”
            </p>

            <p className="text-xs md:text-sm text-gray-800 font-semibold">
              – {item.name}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
