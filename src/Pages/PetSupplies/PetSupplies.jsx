import React from "react";
import { useLoaderData } from "react-router";
import PetSuppliesCard from "../petSuppliesCard/PetSuppliesCard";

const PetSupplies = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="py-20 ">
        <h1 className="font-bold text-3xl text-center text-amber-700">
          Pets & Supplies — Adopt, Care & Shop
        </h1>
      </div>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {data.map((card) => (
          <PetSuppliesCard key={card.id} card={card}></PetSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;
