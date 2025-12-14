import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const scrollThreshold = 40;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setShow(true);
      } else if (currentScroll - lastScroll > scrollThreshold) {
        setShow(false);
      } else if (lastScroll - currentScroll > scrollThreshold) {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-6
        bg-amber-50 shadow
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-0 py-5">
        <h1 className=" md:text-4xl text-2xl">PureBrush</h1>

        <ul className="flex md:flex-row flex-col py-0 h-10 justify-center lg:gap-30 md:gap-6 gap-2 md:text-lg md:pl-80 text-sm ">
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">Benefits</a></li>
          <li><a href="#" className="hover:underline">Best-sellers</a></li>
        </ul>

        <button className="bg-[#104B4F] md:flex hidden text-white md:px-4 md:py-2 hover:bg-teal-800">

          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
