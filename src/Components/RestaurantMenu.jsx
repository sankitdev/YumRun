import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_URL } from "../../constant";
const RestaurantMenu = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${REST_MENU_URL}${id}`).then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div className="dark:text-white">
      <h1>Restaurant Menu id:{id}</h1>
    </div>
  );
};

export default RestaurantMenu;
