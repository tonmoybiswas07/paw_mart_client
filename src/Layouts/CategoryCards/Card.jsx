import React from "react";
import { Link } from "react-router-dom"; // ← এটা ঠিক করো

const Card = ({ cat }) => {
  return (
    <Link
      to={`/category-filtered-product/${cat.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div className="bg-white shadow-md p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:border-dashed hover:border-2 w-56 border-amber-600 mt-3">
        <div className="flex justify-center items-center gap-3">
          <img
            className="rounded-full border-2 border-amber-600 w-16 h-16"
            src={cat.image}
            alt={cat.title}
          />
          <h1 className="text-2xl font-semibold text-amber-600">{cat.title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
