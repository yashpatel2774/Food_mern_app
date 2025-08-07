import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ setCategory }) => {
  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
        Explore our Menu
      </h1>

      <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-2xl leading-relaxed">
        Choose from a diverse menu featuring a delectable array of dishes. <br className="hidden sm:inline" />
        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => setCategory(item.menu_name.toLowerCase())} 
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 sm:border-4 border-transparent group-hover:border-orange-500 transition duration-300 ease-in-out">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium group-hover:text-orange-500 transition text-center">
              {item.menu_name}
            </span>
          </div>
        ))}
      </div>

      <div className='border border-gray-200 mt-7 mb-6'></div>
    </section>
  );
};

export default ExploreMenu;
