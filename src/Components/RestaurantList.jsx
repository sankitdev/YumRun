import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ RestData }) {
  const title = RestData[2]?.card?.card?.title || "";
  const gridList =
    RestData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  console.log(RestData);
  return (
    <>
      <h1 className="dark:text-white text-2xl font-semibold py-2">
        {title ? title : "Loading..."}
      </h1>
      <div className="flex flex-wrap h-56 gap-10 justify-center">
        {gridList.length > 0
          ? gridList.map((items) => (
              <RestaurantCard
                key={items.info.id}
                image={items?.info?.cloudinaryImageId}
                cuisines={items?.info?.cuisines}
                locality={items?.info?.locality}
                name={items?.info?.name}
              />
            ))
          : "Loading..."}
      </div>
    </>
  );
}

export default RestaurantList;
