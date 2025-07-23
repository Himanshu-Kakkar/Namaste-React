import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [loginBtn, setLoginBtn] = useState("Login");
    // const cartItems = useSelector((store) => store.cart.items);
    const cartItems = 0;

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Yummyfy Logo"
            className="w-14 h-14 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-orange-500">
              Yummyfy
            </span>
            <span className="text-sm text-gray-500 italic">
              Food that makes you happy
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6 text-base font-medium text-gray-700">
            <li className="hover:text-orange-500 transition">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>

            {/* Cart Icon */}
            <li className="relative">
              <Link
                to="/cart"
                className="flex items-center hover:text-orange-500 transition"
              >
                🛒
                <span className="ml-1">Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Login Button */}
            <li>
              <button
                onClick={() =>
                  setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"))
                }
                className="bg-orange-400 text-white px-4 py-1.5 rounded-md hover:bg-orange-500 transition"
              >
                {loginBtn}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
