import React from "react";
const NavBar = () => {
  return (
    <div className="dark:text-white flex justify-between py-2 px-4 border-2 border-blue-50 h-16 items-center">
      <h1 className="font-medium text-xl">
        YumRun <span className="text-sm pl-2 underline"> Location </span>
        <i className="text-md">^</i>
      </h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Search</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default NavBar;
