import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Top Dishes Near You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {food_list
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

      <div className='border border-gray-200'></div>
    </section>
  );
};

export default FoodDisplay;
