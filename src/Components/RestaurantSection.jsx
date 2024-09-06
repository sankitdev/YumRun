import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function RestaurantSection({ title, gridList, className }) {
  return (
    <>
      <h1 className="dark:text-white text-2xl font-semibold py-4">
        {title ? title : "Loading..."}
      </h1>
      <div className={`flex gap-10 justify-center ${className}`}>
        {gridList.length === 0
          ? Array(6)
              .fill()
              .map((_, index) => <Shimmer key={index} />)
          : gridList.map((items) => (
              <Link to={"/restaurant/" + items.info.id} key={items.info.id}>
                <RestaurantCard
                  image={items?.info?.cloudinaryImageId}
                  cuisines={items?.info?.cuisines}
                  locality={items?.info?.locality}
                  name={items?.info?.name}
                />
              </Link>
            ))}
      </div>
    </>
  );
}

export default RestaurantSection;
