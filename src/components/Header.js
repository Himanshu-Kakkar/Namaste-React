import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
// import LOGO from "../Assets/logo.png";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [loginBtn, setLoginBtn] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Brand Name */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img
              src={"https://res.cloudinary.com/dvnzvz4xh/image/upload/v1753468374/Screenshot_2025-07-26_at_00.02.35_zhb186.png"}
              alt="Yummyfy Logo"
              className="w-14 h-14 rounded-full shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-orange-500">
                Cravory
              </span>
              <span className="text-sm text-gray-500 italic">
                Where Cravings Meet Their Match
              </span>
            </div>
          </div>
        </Link>

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
            <li>
                {loggedInUser}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
