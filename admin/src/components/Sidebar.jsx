import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus, FaList, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path) => {
    const isActive = location.pathname === path;
    const shouldHighlight = isActive && path !== '/';

    return `flex items-center justify-center md:justify-start gap-0 md:gap-2 p-2 border rounded-md text-sm hover:bg-gray-100 transition ${
      shouldHighlight ? 'bg-[#fff0ed]' : ''
    }`;
  };

  return (
  <div className="fixed top-25 left-0 h-[calc(100vh-64px)] w-16 md:w-64 bg-white border-r p-2 md:p-4 transition-all duration-300">
  <div className="flex flex-col gap-3">
    <Link to="/add-items" className={linkClasses('/add-items')}>
      <FaPlus size={18} />
      <span className="hidden md:inline">Add Items</span>
    </Link>
    <Link to="/list-items" className={linkClasses('/list-items')}>
      <FaList size={18} />
      <span className="hidden md:inline">List Items</span>
    </Link>
    <Link to="/orders" className={linkClasses('/orders')}>
      <FaClipboardList size={18} />
      <span className="hidden md:inline">Orders</span>
    </Link>
  </div>
</div>

  );
};

export default Sidebar;
