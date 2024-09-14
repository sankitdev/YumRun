import Banner from "./Banner";
import { URL_HOME } from "../../constant";
import RestSection from "./RestaurantSection";
import Shimmer from "../Shimmer/Shimmer.jsx";
import useOnline from "../../hooks/useOnline.js";
import useFetchData from "../../hooks/useFetchMenu.js";

const Body = () => {
  const data = useFetchData(URL_HOME);
  console.log(data)
  const online = useOnline()
  if(!online){
    return <h1>You are offline</h1>
  }
  return (
    <div className="px-10 md:px-24 lg:px-24 h-full">
      {data ? (
        <>
          <Banner title={data?.data?.cards[0]?.card?.card?.header?.title} gridList={data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []} className="h-48 gap-5"/>
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
