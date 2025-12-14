import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SectionCard from "./components/SectionCard";
import Testimonials from "./components/Testimonials";
import ClientsGallery from "./components/ClientsGallery";
import BestSellers from "./components/BestSellers";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

import improvedOral from "./assets/improved-oral-health.png";
import enhancedAppearance from "./assets/enhanced-appearance.png";
import brushBoosts from "./assets/brush-boosts.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features/>
      <SectionCard image={improvedOral} title="Improved Oral Health" desc="Premium toothbrushes to improve oral hygiene." btnText="Buy Now"/>
      <Testimonials />
      <ClientsGallery />
      <BestSellers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
