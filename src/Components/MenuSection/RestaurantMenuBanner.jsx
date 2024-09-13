import {useState,useEffect} from "react"
import Shimmer from "../Shimmer/Shimmer"
const RestaurantMenuBanner = ({ restaurantInfo }) => { 
try {
  const[loading,setLoading] = useState(true)
  useEffect(()=>{
    if(restaurantInfo && restaurantInfo.length > 0){
      setLoading(false);
    }
  },[restaurantInfo])
  if(loading){
    return <Shimmer/>
  }
  const {text} = restaurantInfo?.[0]?.card?.card || {} 
  const items =  restaurantInfo?.[2]?.card?.card?.info || {}
  console.log(items)
  return (
    <>
      <h1 className="text-2xl font-bold py-4">{text}</h1>
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 rounded-md shadow-md dark:shadow-slate-700 h-40">
        <p>
          <span>⭐{items?.avgRating} ({items?.totalRatingsString})</span> • <span>{items.costForTwoMessage}</span>
        </p>
        <p>{items?.cuisines.join(" , ") || null}</p>
        <p>
          <span>{items?.locality}</span>
        </p>
        <p className="mb-2">{items?.sla?.slaString}</p>
        <p className="border-t-2 border-gray-300 py-2">
         {items?.expectationNotifiers[0]?.text}
        </p>
      </div>
      <p className="text-center my-4 text-2xl">MENU</p>
    </>
  );
} catch (error) {
  console.error("Error in RestaurantMenuBanner:", error);
  return <p>Failed to Fetch restaurant data</p>
}
};

export default RestaurantMenuBanner;
