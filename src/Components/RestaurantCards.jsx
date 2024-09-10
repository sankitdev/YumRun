import React from "react";
import { REST_URL } from "../constant";

function RestaurantCard({ image, cuisines, locality, name }) {
  return (
    <div
      className={`dark:text-white w-44 md:w-64 lg:w-72 h-60 rounded-lg cursor-pointer overflow-hidden flex-shrink-0 shadow-md hover:scale-95 transition-all duration-300 ease-in-out  `}
    >
      <img
        className="h-3/5 w-full object-cover object-center shadow-sm hover:scale-105 transition-all "
        src={`${REST_URL}${image}`}
        alt=""
      />
      <div className="p-2">
        <h1 className="text-lg font-semibold truncate">{name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {cuisines}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {locality}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
