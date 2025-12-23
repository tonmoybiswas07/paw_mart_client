import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = {
      name: e.target.name.value,
      category: e.target.category.value,
      ownerEmail: user.email,
      description: e.target.description.value,
      price: e.target.price.value,
      location: e.target.location.value,
      image: e.target.image.value,
    };

    fetch("http://localhost:5000/martProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Listing added successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center pt-18 pb-16 min-h-screen bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Listing
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            >
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
              rows="4"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-600 outline-none"
            />
          </div>

          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition-colors">
            Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
