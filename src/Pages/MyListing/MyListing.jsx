import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/martProducts?ownerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // server থেকে { success: true, result } আসছে
        setListings(data.result || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load listings!");
        setLoading(false);
      });
  }, [user]);

  // Delete listing
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/martProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.deletedCount > 0) {
          toast.success("Listing deleted successfully!");
          setListings(listings.filter((item) => item._id !== id));
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete listing!");
      });
  };

  // Placeholder for update
  const handleUpdate = () => {
    toast.info("Update feature coming soon!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-xl font-semibold text-amber-700">
        Loading your listings...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-10">
        My Listings
      </h1>

      {listings.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You haven’t added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-200 shadow-md rounded-xl">
            <thead className="bg-amber-100 text-amber-800">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-amber-50 transition-colors"
                >
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2 text-center space-x-3">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListing;
