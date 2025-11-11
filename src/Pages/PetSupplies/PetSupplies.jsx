import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import PetSuppliesCard from "../petSuppliesCard/PetSuppliesCard";
import { Hourglass } from "react-loader-spinner";

const PetSupplies = () => {
  const loaderData = useLoaderData(); // loaderData হতে পারে empty বা undefined প্রথমে
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loaderData) {
      setData(loaderData);
      setLoading(false);
    }
  }, [loaderData]);

  return (
    <div>
      <div className="py-20">
        <h1 className="font-bold text-3xl text-center text-amber-700">
          Pets & Supplies — Adopt, Care & Shop
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Hourglass
            visible={true}
            height="200"
            width="200"
            ariaLabel="hourglass-loading"
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {data.map((card) => (
            <PetSuppliesCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PetSupplies;
