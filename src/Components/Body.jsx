import Banner from "./Banner";
import { URL_HOME } from "../constant";
import axios from "axios";
import { useEffect, useState } from "react";
import RestSection from "./RestaurantSection";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(URL_HOME)
        setData(response.data)
      } catch (error) {
        console.error("Error fetching Data", error)
      }
    }
    fetchData()
  }, []);
  return (
    <div className="px-10 md:px-24 lg:px-24 h-full">
      {data ? (
        <>
          <Banner BannerData={data} />
          {/* Section for horizontal Scroll Restaurants */}
          <RestSection
            title={data?.data?.cards[1]?.card?.card?.header?.title}
            gridList={
              data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || []
            }
            className="overflow-x-auto hide-scrollbar px-4 py-2"
            noofShimmer = {5}
          />
          {/* Section for normal Restaurants */}
          <RestSection
            title={data?.data?.cards[2]?.card?.card?.title || ""}
            gridList={
              data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || []
            }
            className="flex-wrap"
            noofShimmer = {12}
          />
        </>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {Array(10)
            .fill()
            .map((_, index) => (
              <Shimmer key={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
