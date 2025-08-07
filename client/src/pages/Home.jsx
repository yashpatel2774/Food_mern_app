import React, { useState } from 'react';
import headerImage from '../assets/header_img.png';
import ExploreMenu from '../Components/ExploreMenu';
import FoodDisplay from '../Components/FoodDisplay';
import AppDownload from '../Components/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('all');

  return (
    <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">

      <div id="home" className="relative w-full h-[550px] rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={headerImage}
          alt="Main Logo"
        />

        <div className="absolute top-[20%] left-[8%] mt-20 text-left text-white z-10 space-y-4">
          <style>
            {`
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                60% { opacity: 0.6; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
              }

              .fadeInUp {
                animation: fadeInUp 0.8s ease-out forwards;
              }

              .delay-1 { animation-delay: 0.3s; }
              .delay-2 { animation-delay: 0.6s; }
              .delay-3 { animation-delay: 0.9s; }
              .delay-4 { animation-delay: 1.2s; }
            `}
          </style>

          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg fadeInUp">
            Order your
          </h1>

          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mt-3 fadeInUp delay-1">
            favorite food here
          </h1>

          <p className="text-base md:text-lg font-medium mt-4 max-w-md drop-shadow-md leading-snug fadeInUp delay-2">
            Welcome to our Food Delivery Service! Discover a variety of delicious meals delivered to your doorstep. Enjoy your favorite dishes from the comfort of your home.
          </p>

          <button className="mt-4 border px-4 py-2 rounded-2xl hover:bg-amber-700 hover:cursor-pointer hover:text-white transition duration-300 hover:scale-105 fadeInUp delay-3">
            View Menu
          </button>
        </div>
      </div>

      <div id="menu" className="mt-10 w-full">
        <ExploreMenu setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>

      <div id="mobileapp" className="mt-10 w-full">
        <AppDownload />
      </div>

    </section>
  );
};

export default Home;
