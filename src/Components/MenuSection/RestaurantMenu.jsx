import { useParams } from "react-router-dom";
import MenuCard from "./MenuCards";
import RestaurantMenuBanner from "./RestaurantMenuBanner";
import useFetchData from "../../utils/useFetchMenu.js";
import { REST_MENU_URL } from "../../constant.js";
const RestaurantMenu = () => {
  const { id } = useParams();
  const menu = useFetchData(REST_MENU_URL,id);
  // console.log(menu)
  const { data } = menu || {};
  const { cards } = data || {};
  const restaurantInfo = cards || {};
  const menuItems = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
  return (
    <div className="dark:text-white px-10 min-h-full my-4 flex flex-col items-center ">
       <RestaurantMenuBanner restaurantInfo={restaurantInfo}/>
       <MenuCard items={menuItems} />
    </div>

  );
};

export default RestaurantMenu;
