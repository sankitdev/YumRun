const RestaurantMenuBanner = ({ restaurantInfo }) => {
  return (
    <>
      <h1 className="text-2xl font-bold py-4 ">{restaurantInfo.text}</h1>
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 rounded-md shadow-md dark:shadow-gray-50 h-40">
        <p>
          <span>⭐4.5 (58K+ ratings)</span>•<span>₹350 for two</span>
        </p>
        <p>Burgers, American</p>
        <p>
          Outlet <span>Adajan Gam</span>
        </p>
        <p>20-25 min</p>
        <p className="border-t-2 border-gray-300">
          Order above 149 for discounted delivery fee
        </p>
      </div>
      <p className="text-center">MENU</p>
    </>
  );
};

export default RestaurantMenuBanner;
