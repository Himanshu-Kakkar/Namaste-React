import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-[#e2d1c3] shadow-lg">
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL}></img>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/error">Cart</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;