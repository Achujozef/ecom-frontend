import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full bg-white h-24 text-center font-josefin-sans">
      <div className="nav_left w-1/3">
        <ul className="flex justify-center gap-10 pt-7 pl-3">
          <li className="nav_title">Home</li>
          <li className="nav_title">Cart</li>
          <li className="nav_title">Orders</li>
          <li className="nav_title">About Us</li>
        </ul>
      </div>
      <div className="nav_center w-1/3">
        <Link to="/">
        <h1 className="pt-7 text-2xl">LOGO</h1>
        </Link> 
      </div>
      <div className="nav_right w-1/3">
        <ul className="flex justify-center gap-10 pt-7">
          <li className="nav_title text-lg"> <IoIosSearch /> </li>
          <li className="nav_title"> <FiHeart /> </li>
          <li className="nav_title" ><Link to="/Login">Log In</Link></li>
          <li className="nav_title">About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
