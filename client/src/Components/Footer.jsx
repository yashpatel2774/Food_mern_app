import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
       
        <div className="space-y-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-36" />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 mt-3">
            Delicious meals delivered to your door. Fresh ingredients, fast
            service, and unbeatable taste!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Mobile App", path: "/mobileapp" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-orange-500 hover:underline transition duration-200"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Email: support@tomato.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Surat, Gujarat</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://www.facebook.com/zomato/",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/swiggyindia/",
              },
              {
                icon: <FaTwitter />,
                href: "https://twitter.com/Zomato",
              },
            ].map(({ icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 hover:text-white transition-transform transform hover:scale-110 duration-300 text-lg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm text-gray-300 bg-slate-800 border-t border-gray-700">
        &copy; {new Date().getFullYear()} <span className="text-orange-500">Tomato</span> Food Delivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
