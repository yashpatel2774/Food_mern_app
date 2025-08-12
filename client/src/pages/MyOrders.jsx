import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyOrders = () => {
  const [data, setData] = useState([]);

  return (
    <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h2>

      <div className="space-y-4">
        {data.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >

            <div className="flex items-center space-x-4">
              <img
                src={assets.parcel_icon}
                alt="Parcel icon"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-gray-700 text-sm">
                  {order.items.map((item, idx) =>
                    idx === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </p>
                <p className="text-lg font-semibold text-orange-500 mt-1">
                  ₹{order.amount}.00
                </p>
                <p className="text-sm text-gray-500">
                  Items: {order.items.length}
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
              <p className="flex items-center text-sm">
                <span className="text-green-500 mr-1">&#x25cf;</span>
                <b className="text-gray-700">{order.status}</b>
              </p>
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm transition-colors">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyOrders;
