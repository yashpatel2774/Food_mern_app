import React, { useContext } from 'react';
import { StoreContext } from "../context/StoreContext";
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { foodList, loading } = useContext(StoreContext);

  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </section>
    );
  }

  if (!Array.isArray(foodList) || foodList.length === 0) {
    return (
      <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Top Dishes Near You
        </h2>
        <p className="text-gray-500">No dishes available.</p>
      </section>
    );
  }

  return (
    <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Top Dishes Near You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {foodList
          .filter((item) => category === 'all' || item.category.toLowerCase() === category)
          .map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
      </div>

      <div className="border border-gray-200"></div>
    </section>
  );
};

export default FoodDisplay;
