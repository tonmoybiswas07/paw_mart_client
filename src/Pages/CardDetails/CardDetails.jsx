import React, { useState } from "react";
import { MapPin, Mail, Tag, DollarSign, PawPrint } from "lucide-react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const { name, category, ownerEmail, description, price, location, image } =
    data;
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <PawPrint className="text-amber-600" /> {name}
            </h2>

            <p className="flex items-center text-gray-600 mb-2">
              <Tag className="w-4 h-4 mr-2 text-amber-500" />
              {category}
            </p>

            <p className="flex items-center text-gray-600 mb-2">
              <Mail className="w-4 h-4 mr-2 text-amber-500" />
              {ownerEmail}
            </p>

            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2 text-amber-500" />
              {location}
            </p>

            <p className="flex items-center text-gray-600 mb-4">
              <DollarSign className="w-4 h-4 mr-2 text-amber-500" />
              {price}
            </p>

            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Adopt Now
          </button>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Place Your Order
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value="John Doe"
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Buyer Name"
              />

              <input
                type="email"
                value="john@example.com"
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Email"
              />

              <input
                type="text"
                value={data?._id || ""}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Product ID"
              />

              <input
                type="text"
                value={name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Product Name"
              />

              <input
                type="number"
                value={1}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Quantity"
              />

              <input
                type="number"
                value={price}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Price"
              />

              <input
                type="text"
                placeholder={location}
                className="w-full p-2 border border-gray-300 rounded-lg md:col-span-2"
              />

              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />

              <textarea
                rows={3}
                placeholder="Additional Notes"
                className="w-full p-2 border border-gray-300 rounded-lg md:col-span-2"
              />
            </form>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                type="submit"
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
