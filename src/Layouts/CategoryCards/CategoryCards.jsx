import React from "react";
import pets from "../../assets/download.jpeg";
import petFood from "../../assets/pet food.jpeg";
import petAccessories from "../../assets/pet accc.jpeg";
import petCare from "../../assets/pet care products.jpeg";
import Card from "./Card";

const CategoryCards = () => {
  const categories = [
    { id: 1, title: "Pets", image: pets },
    { id: 2, title: "Pet Food", image: petFood },
    { id: 3, title: "Accessories", image: petAccessories },
    { id: 4, title: "Pet Care Products", image: petCare },
  ];

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center font-extrabold text-amber-700 text-2xl md:text-3xl">
          All Category
        </h2>
      </div>
      <div className="flex flex-wrap  justify-around items-center mt-7">
        {categories.map((cat) => (
          <Card key={cat.id} cat={cat}></Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
