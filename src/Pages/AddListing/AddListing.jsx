import React from "react";

const AddListing = ({ currentUserEmail = "user@example.com" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen  mt-15">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Listing
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500">
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
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
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
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Pick Up Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              value={currentUserEmail}
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
