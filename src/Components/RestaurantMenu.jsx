import { useParams } from "react-router-dom";
import MenuCard from "./MenuCards";
import useFetchMenu from "../utils/useFetchMenu";
import RestaurantMenuBanner from "./RestaurantMenuBanner";
const RestaurantMenu = () => {
  const { id } = useParams();
  const menu = useFetchMenu(id);
  const { data } = menu || {};
  const { cards } = data || {};
  const restaurantInfo = cards?.[0]?.card?.card || {};
  const menuItems = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
  return (
    <div className="dark:text-white px-10 min-h-full my-4 flex flex-col items-center ">
       <RestaurantMenuBanner restaurantInfo={restaurantInfo}/>
       <MenuCard items={menuItems} />
    </div>

  );
};

export default RestaurantMenu;
