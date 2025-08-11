import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b bg-white">
      <div className="flex items-center hover:cursor-pointer gap-2">
        <Link to='/'><img src={assets.logo} alt="Logo" /></Link>
      </div>

      <div>
        <Link to='/'>
          <img
            src={assets.profile_image}
            alt="Profile"
            className="rounded-full object-cover cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
