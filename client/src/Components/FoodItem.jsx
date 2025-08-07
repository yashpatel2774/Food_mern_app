import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/storeContext";
import { FaPlus, FaMinus } from "react-icons/fa";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems  } = useContext(StoreContext);
  const quantity = cartItems[id] || 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-40 overflow-hidden rounded-md mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-lg">{name}</p>
        <img src={assets.rating_starts} alt="rating" className="h-4" />
      </div>

      <p className="text-gray-600 text-sm mb-2">{description}</p>

      <div className="flex items-center justify-between">
        <p className="text-orange-600 font-semibold text-md">₹{price}</p>

        {quantity > 0 ? (
          <div className="bg-white rounded-full shadow-md px-3 py-1 flex items-center space-x-3">
            <FaMinus
              className="text-red-500 cursor-pointer text-xs hover:scale-110 transition"
              onClick={() => removeFromCart(id)}
            />
            <span className="text-sm font-medium">{quantity}</span>
            <FaPlus
              className="text-green-600 cursor-pointer text-xs hover:scale-110 transition"
              onClick={() => addToCart(id)}
            />
          </div>
        ) : (
          <FaPlus
            onClick={() => addToCart(id)}
            className="text-green-600 text-xl bg-white rounded-full p-1 shadow hover:scale-110 transition cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default FoodItem;
