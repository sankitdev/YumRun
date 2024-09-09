import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function RestaurantSection({ title, gridList, className,noofShimmer }) {
  return (
    <>
      <h1 className="dark:text-white text-2xl font-semibold py-4">
        {title ? title : "Loading..."}
      </h1>
      <div className={`flex gap-10 justify-center ${className}`}>
        {gridList.length === 0
          ? Array(noofShimmer)
              .fill()
              .map((_, index) => <Shimmer key={index} />)
          : gridList.map((items) => {
            const {info} = items 
            const{id,cloudinaryImageId,cuisines,locality,name} = info 
            return (
              <Link to={"/restaurant/" + id} key={id}>
                <RestaurantCard
                  image={cloudinaryImageId}
                  cuisines={cuisines}
                  locality={locality}
                  name={name}
                />
              </Link>
            )
          })}
      </div>
    </>
  );
}

export default RestaurantSection;
