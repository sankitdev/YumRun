import React from "react";
import { IMG_URL } from "../../constant";

function Banner({ BannerData }) {
  const title = BannerData?.data?.cards[0]?.card?.card?.header?.title;
  const gridList =
    BannerData?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
  return (
    <>
      <h1 className="dark:text-white text-2xl my-4 font-semibold">{title}</h1>
      <div className="my-2 w-full h-48 flex gap-10 items-center overflow-x-auto hide-scrollbar">
        {gridList.length > 0
          ? gridList.map((items) => (
              <img
                key={items.id}
                className="h-36 w-36 rounded-full object-cover flex-shrink-0 hover:scale-105 transition-all"
                src={`${IMG_URL}${items.imageId}`}
                alt={items.description}
              />
            ))
          : "Loading..."}
      </div>
    </>
  );
}

export default Banner;
