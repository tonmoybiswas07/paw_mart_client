import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // ✅ selected product

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/martProducts?ownerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data.result || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load listings!");
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.result.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
              setListings(listings.filter((item) => item._id !== id));
            } else {
              Swal.fire("Error!", "Failed to delete listing.", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Failed to delete listing.", "error");
          });
      }
    });
  };

 
  const openUpdateModal = (item) => {
    setSelectedItem(item);
    document.getElementById("update_modal").showModal();
  };

  
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      name: form.name.value,
      price: form.price.value,
      location: form.location.value,
    };

    fetch(`http://localhost:5000/${selectedItem._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Updated!", "Listing updated successfully.", "success");
          setListings((prev) =>
            prev.map((l) =>
              l._id === selectedItem._id ? { ...l, ...updatedData } : l
            )
          );
          document.getElementById("update_modal").close();
        } else {
          Swal.fire("Error!", "Failed to update listing.", "error");
        }
      })
      .catch(() => Swal.fire("Error!", "Failed to update listing.", "error"));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-xl font-semibold text-amber-700">
        Loading your listings...
      </div>
    );
  }

  return (
    <div className="p-17 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-10">
        My Listings
      </h1>

      {listings.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You haven’t added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200 shadow-md rounded-xl">
            <thead className="bg-amber-100  text-amber-800">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr
                  key={item._id}
                  className=" hover:bg-amber-50 hover:text-black"
                >
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>{item.location}</td>
                  <td className="text-center space-x-2">
                    <button
                      onClick={() => openUpdateModal(item)}
                      className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
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

      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-amber-700 mb-4">
            Update Listing
          </h3>
          {selectedItem && (
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <div>
                <label className="label-text font-medium">Name</label>
                <input
                  name="name"
                  defaultValue={selectedItem.name}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label-text font-medium">Price</label>
                <input
                  name="price"
                  type="number"
                  defaultValue={selectedItem.price}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label-text font-medium">Location</label>
                <input
                  name="location"
                  defaultValue={selectedItem.location}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn bg-amber-600 text-white">
                  Update
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("update_modal").close()
                  }
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default MyListing;
