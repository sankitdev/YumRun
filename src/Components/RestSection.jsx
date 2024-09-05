import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
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
              <RestaurantCard
                key={items.info.id}
                image={items?.info?.cloudinaryImageId}
                cuisines={items?.info?.cuisines}
                locality={items?.info?.locality}
                name={items?.info?.name}
              />
            ))}
      </div>
    </>
  );
}

export default RestaurantSection;
