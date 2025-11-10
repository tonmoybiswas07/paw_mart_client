import React from "react";
import Banner from "../../Layouts/Banner/Banner";
import CategoryCards from "../../Layouts/CategoryCards/CategoryCards";
import Adopt from "../../Layouts/Adopt/Adopt";
import Hero from "../../Layouts/Heros/Hero";


const Home = () => {
  return (
    <div className="mt-16">
      <Banner></Banner>
      <CategoryCards></CategoryCards>
      <Adopt></Adopt>
      <Hero></Hero>
     
    </div>
  );
};

export default Home;
