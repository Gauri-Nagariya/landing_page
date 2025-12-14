// import React, { useState, useEffect } from "react";

// const Navbar = () => {

//      const [show, setShow] = useState(true);
//   const [lastScroll, setLastScroll] = useState(0);
//  const scrollThreshold = 40; // minimum scroll in px to trigger hide/show

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;

//       if (currentScroll <= 0) {
//         setShow(true); // always show at top
//       } else if (currentScroll - lastScroll > scrollThreshold) {
//         setShow(false); // scrolling down past threshold
//       } else if (lastScroll - currentScroll > scrollThreshold) {
//         setShow(true); // scrolling up past threshold
//       }

//       setLastScroll(currentScroll);
//     };

//      window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   return (
//  <nav
//       className={`fixed top-0 left-0 w-full flex justify-between items-center px-16 py-8 bg-amber-50 shadow transition-transform duration-300 z-50 ${
//         show ? "translate-y-0" : "-translate-y-32"
//       }`}
//     >
//       <h1 className="text-4xl">PureBrush</h1>
//       <ul className="flex text-lg space-x-26 ml-120">
//         <li>
//           <a href="" className="hover:underline">Categories</a>
//         </li>
//         <li>
//           <a href="" className="hover:underline">Benefits</a>
//         </li>
//         <li>
//           <a href="" className="hover:underline">Best-sellers</a>
//         </li>
//       </ul>
//       <button className="bg-[#104B4F] text-white px-4 py-2 hover:bg-teal-800">
//         Shop Now
//       </button>
//     </nav>
//   );
// };

// export default Navbar;


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
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl">PureBrush</h1>

        {/* Links (desktop only) */}
        {/* <ul className="hidden md:flex gap-10 text-lg"> */}
        <ul className="flex lg:gap-30 gap-6 text-base md:text-lg md:pl-80">
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">Benefits</a></li>
          <li><a href="#" className="hover:underline">Best-sellers</a></li>
        </ul>

        {/* Button (desktop only) */}
        {/* <button className="hidden md:block bg-[#104B4F] text-white px-4 py-2 hover:bg-teal-800"> */}
        <button className="bg-[#104B4F] text-white px-4 py-2 hover:bg-teal-800">

          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
