import React from "react";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="bg-white dark:bg-inherit flex justify-between py-2 px-10 md:px-24 lg:px-24 h-16 items-center sticky top-0 z-10">
      <h1 className="font-bold text-xl font-custom text-orange-500">
        <Link to={"/"}>
          Yum<span className="text-green-500">Run</span>
        </Link>
      </h1>
      <ul className="flex gap-7 text-lg font-medium">
        <li className="hover:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/search" className="flex items-center space-x-1">
            {" "}
            <span> Search</span> <CiSearch className="text-xl " />
          </Link>
        </li>
        <li className="relative hover:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/cart">
            <CiShoppingCart className="text-3xl" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
