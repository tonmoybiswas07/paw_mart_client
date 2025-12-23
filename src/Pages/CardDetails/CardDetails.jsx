import React, { useContext, useState } from "react";
import { MapPin, Mail, Tag, DollarSign, PawPrint } from "lucide-react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const CardDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const card = data.result;

  const {
    _id,
    name,
    category,
    ownerEmail,
    description,
    price,
    location,
    image,
  } = card;


  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const order = {
      productId: _id,
      productName: name,
      buyerName: user.displayName,
      buyerEmail: user.email,
      price,
      quantity: 1,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      notes: form.notes.value,
      orderDate: new Date(),
      status: "Pending",
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire(
            "Success!",
            "Your adoption request / order has been placed!",
            "success"
          );
          setShowModal(false);
        } else {
          Swal.fire("Error!", "Failed to place order.", "error");
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to place order.", "error");
      });
  };

  return (
    <div className="min-h-200 bg-amber-50 flex items-center justify-center p-6">
      <div className="bg-amber-100 shadow-2xl rounded-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden">
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
              <DollarSign className="w-4 h-4 mr-2 text-amber-500" /> {price}
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

      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-amber-50 rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Place Your Order
            </h2>

            <form
              onSubmit={handleOrderSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black "
            >
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <input
                type="text"
                value={name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <input
                type="number"
                value={price}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <input
                type="text"
                name="address"
                placeholder="Full Address"
                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-lg md:col-span-2"
                required
              />
              <input
                type="date"
                name="date"
                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-lg"
                required
              />
              <textarea
                name="notes"
                rows={3}
                placeholder="Additional Notes"
                className="w-full p-2 border border-gray-300 bg-gray-100 rounded-lg md:col-span-2"
              />

              <div className="flex justify-end gap-2 md:col-span-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
