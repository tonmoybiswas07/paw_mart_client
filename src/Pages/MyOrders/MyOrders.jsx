import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.result || []));
  }, [user]);

  return (
    <div className="p-17">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-10">
        My Orders
      </h1>

      {order.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-200 shadow-md rounded-xl">
            <thead className="bg-amber-100 text-amber-800">
              <tr>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order) => (
                <tr key={order._id} className="hover:bg-amber-50">
                  <td>{order.productName}</td>
                  <td>{order.buyerName}</td>
                  <td>${order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end mt-6">
        
        <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
