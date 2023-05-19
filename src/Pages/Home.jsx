import React from "react";
import HeroSection from "../Components/HeroSection";
import Trusted from "../Components/Trusted";
import Services from "../Components/Services";
import FeaturedProducts from "../Components/FeaturedProducts";

const Home = () => {
  const data = {
    name: "HomePage",
  };
  return (
    <>
      <HeroSection mydata={data} />
      <Services />
      <FeaturedProducts />
      <Trusted />
    </>
  );
};

export default Home;
