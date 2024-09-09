import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="dark:text-white dark:bg-inherit bg-white flex justify-between py-2 px-10 md:px-24 lg:px-24 h-16 items-center sticky top-0 z-10">
      <h1 className="font-bold text-xl font-custom text-orange-500">
        <Link to={"/"}>Yum<span className="text-green-500">Run</span></Link>
      </h1>
      <ul className="flex gap-4 text-lg font-medium">
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out ">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out ">
          <Link to="/search">Search</Link>
        </li>
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out "><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};
export default NavBar;
