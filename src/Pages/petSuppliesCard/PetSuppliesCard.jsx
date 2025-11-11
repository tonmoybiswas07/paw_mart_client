import React from "react";
import { Link } from "react-router";

const PetSuppliesCard = ({ card }) => {
  const { _id, name, image, location, category, price } = card;
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
 
      <div className="w-full h-48 md:h-56 lg:h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

  
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-amber-600 font-medium mt-1">
              {category}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium text-gray-700">{location}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-base font-semibold text-gray-800">
              {price === 0 || price === "0" ? "Free (Adoption)" : `৳ ${price}`}
            </p>
          </div>

          <Link
            to={`/petDetails/${_id}`}
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetSuppliesCard;
