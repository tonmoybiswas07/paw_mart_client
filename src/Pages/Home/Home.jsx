import React from "react";
import Banner from "../../Layouts/Banner/Banner";
import CategoryCards from "../../Layouts/CategoryCards/CategoryCards";
import Adopt from "../../Layouts/Adopt/Adopt";
import Hero from "../../Layouts/Heros/Hero";
import LatestProducts from "../../Layouts/LatestProducts/LatestProducts";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const latestProducts = data.slice(0, 6);
  return (
    <div className="mt-16">
      <Banner></Banner>
      <CategoryCards></CategoryCards>
      <LatestProducts latestProducts={latestProducts}></LatestProducts>
      <Adopt></Adopt>
      <Hero></Hero>
    </div>
  );
};

export default Home;
