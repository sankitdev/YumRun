import RestaurantCard from "./RestaurantCard";
const TopRest = ({ RestData }) => {
  const gridList =
    RestData?.card?.gridElements?.infoWithStyle?.restaurants || [];
  const title = RestData?.card?.header?.title;
  // console.log(gridList);
  //   console.log(RestData);
  return (
    <>
      <h1 className="dark:text-white text-2xl font-semibold">
        {title ? title : "Loading..."}
      </h1>
      <div className="my-2 w-full h-72 flex gap-10  items-center overflow-x-scroll hide-scrollbar">
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
};
export default TopRest;
