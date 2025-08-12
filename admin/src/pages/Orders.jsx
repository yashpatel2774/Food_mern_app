import React, { useState } from 'react';
import assets from '../assets/assets';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Order Page</h1>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex items-start space-x-4"
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel icon"
              className="w-12 h-12 object-contain"
            />

            <p className="text-gray-700 text-sm leading-relaxed">
              {order.items.map((item, itemIndex) =>
                itemIndex === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
