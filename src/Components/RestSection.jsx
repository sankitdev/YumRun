import RestaurantCard from "./RestaurantCard";
function RestaurantSection({ title, gridList, className }) {
  return (
    <>
      <h1 className="dark:text-white text-2xl font-semibold py-2">
        {title ? title : "Loading..."}
      </h1>
      <div className={`flex gap-10 justify-center ${className}`}>
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

export default RestaurantSection;
