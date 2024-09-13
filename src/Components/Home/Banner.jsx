import React from "react";
import { IMG_URL } from "../../constant";
import BannerShimmer from "../Shimmer/BannerShimmer";

function Banner({ title , gridList,className }) {
  return (
    <>
      <h1 className="text-2xl my-4 font-semibold">{title}</h1>
      <div className={`my-2 flex ${className} items-center overflow-x-auto hide-scrollbar`}>
        {gridList && gridList.length > 0 
          ? gridList.map((items) => (
              <img
                key={items.id}
                className="h-36 w-36 rounded-full object-cover object-center flex-shrink-0 hover:scale-105 transition-all"
                src={`${IMG_URL}${items.imageId}`}
                alt={items.description}
              />
            ))
          : <BannerShimmer/>}
      </div>
    </>
  );
}

export default Banner;
