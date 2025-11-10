import React from "react";
import { Link } from "react-router";

const Card = ({ cat }) => {
  return (
    <Link>
      <div className="bg-white shadow-md p-5 rounded-2xl hover:border-dashed hover:border-2 w-56 border-amber-600 mt-3">
        <div className="flex justify-center items-center gap-3">
          <img
            className="rounded-full border-2 border-amber-600 w-16 h-16"
            src={cat.image}
            alt=""
          />
          <h1 className="text-2xl font-semibold text-amber-600">{cat.title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
