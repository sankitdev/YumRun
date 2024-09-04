import React from "react";
const Header = () => {
  return (
    <div className="dark:text-white flex justify-between py-2 px-4 border-2 border-blue-50 ">
      <h1 className="font-medium text-xl">YumRun</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Search</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default Header;
