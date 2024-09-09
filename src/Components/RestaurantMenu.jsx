import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "../constant";
import MenuCard from "./MenuCard";
const RestaurantMenu = () => {
  const[menu, setMenu] = useState(null)
  const { id } = useParams();
  useEffect(() => {
   const fetchData =  async ()=>{
      try {
        const response = await axios.get(`${REST_MENU_URL}${id}`)
        setMenu(response.data)
      } catch (error) {
        console.error('Error fetching menu data:', error)
      }
    }
    fetchData()
  }, [id]);
  const {data} = menu || {}
  const {cards} = data || {}
  const restaurantInfo = cards?.[0]?.card?.card || {}
  const menuItems = cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {}
  return (
    <div className="dark:text-white px-10 min-h-full my-4 flex flex-col items-center ">
      <h1 className="text-2xl font-bold py-4 ">{restaurantInfo.text}</h1>
      <div className="w-full md:w-1/2 lg:w-1/2 p-2 rounded-md shadow-md h-40 red">
      <p><span>⭐4.5 (58K+ ratings)</span>•<span>₹350 for two</span></p>
      <p>Burgers, American</p>
      <p>Outlet <span>Adajan Gam</span></p>
      <p>20-25 min</p>
      <p className="border-t-2 border-gray-300">
      Order above 149 for discounted delivery fee</p>
      </div>
      <p className="text-center">MENU</p>
    <MenuCard items={menuItems}/>
    </div>
  );
};

export default RestaurantMenu;
