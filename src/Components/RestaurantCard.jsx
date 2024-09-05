import React from "react";
import { REST_URL } from "../../constant";

function RestaurantCard({ image, cuisines, locality, name }) {
  return (
    <div
      className={`dark:text-white min-w-72 h-full rounded-lg overflow-y-hidden cursor-pointer`}
    >
      <img
        className="h-3/4 w-full object-cover "
        src={`${REST_URL}${image}`}
        alt=""
      />
      <div className="p-2 flex-grow">
        <h1 className="text-lg font-semibold truncate">{name}</h1>
        {/* <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {cuisines}
        </p> */}
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {locality}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
