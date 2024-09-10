import { useState, useEffect } from "react";
import { REST_MENU_URL } from "../constant";
import axios from "axios";
const useFetchMenu = (id) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REST_MENU_URL}${id}`);
        setMenu(response.data)
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchData();
  }, [id]);
  return menu;
};

export default useFetchMenu;
