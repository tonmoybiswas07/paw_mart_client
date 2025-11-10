import React from "react";
import Banner from "../../Layouts/Banner/Banner";
import CategoryCards from "../../Layouts/CategoryCards/CategoryCards";

const Home = () => {
  return (
    <div className="mt-16">
      <Banner></Banner>
      <CategoryCards></CategoryCards>
    </div>
  );
};

export default Home;
