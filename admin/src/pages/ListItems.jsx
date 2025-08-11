import React, { useState } from "react";

const ListItems = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=100&h=100&fit=crop",
      name: "Food 1",
      category: "Deserts",
      price: "₹130",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=100&h=100&fit=crop",
      name: "Food 2",
      category: "Pure Veg",
      price: "₹200",
    },
  ]);

  const handleDelete = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">All Foods List</h2>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {listItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td
                  className="border px-4 py-2 text-red-500 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {listItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm">{item.price}</p>
              </div>
              <button
                className="text-red-500 font-bold"
                onClick={() => handleDelete(item.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
