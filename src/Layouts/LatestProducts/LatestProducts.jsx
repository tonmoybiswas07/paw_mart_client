import React from "react";
import PetSuppliesCard from "../../Pages/petSuppliesCard/PetSuppliesCard";

const LatestProducts = ({ latestProducts }) => {
  console.log(latestProducts);
  return (
    <div>
      <div>
        <h1 className="text-amber-700 font-bold text-4xl text-center my-10">
          Latest Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {latestProducts.map((card) => (
          <PetSuppliesCard key={card.id} card={card}></PetSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
