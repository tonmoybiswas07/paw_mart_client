import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryFilter = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://paw-mart-server-two.vercel.app/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [categoryName]);

  return (
    <div className="max-w-6xl mx-auto py-17">
      <h2 className="text-center text-3xl font-bold text-amber-700 mb-8">
        {categoryName.replace(/-/g, " ").toUpperCase()}
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="border rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="mt-3 font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <p className="text-amber-700 font-bold mt-1">${p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default CategoryFilter;
