import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import PetSuppliesCard from "../petSuppliesCard/PetSuppliesCard";
import { Hourglass } from "react-loader-spinner";

const PetSupplies = () => {
  const loader = useLoaderData(); 
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loader && loader.result) {
      setData(loader.result);
      setFilteredData(loader.result);
    }
    setLoading(false); 
  }, [loader]);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearch(text);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="pb-16">
      <div className="py-20">
        <h1 className="font-bold text-3xl text-center text-amber-700">
          Pets & Supplies — Adopt, Care & Shop
        </h1>
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
          className="border border-amber-500 rounded-xl px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
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
      ) : filteredData.length > 0 ? (
        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
          {filteredData.map((card) => (
            <PetSuppliesCard key={card._id} card={card} />
          ))}
        </div>
      ) : (
        <p className="col-span-full text-center text-gray-500 text-lg">
          No results found for "{search}"
        </p>
      )}
    </div>
  );
};

export default PetSupplies;
