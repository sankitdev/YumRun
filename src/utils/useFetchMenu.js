import { useState, useEffect } from "react";
import axios from "axios";
const useFetchData = (url,id) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("trying")
        const response = await axios.get(`${url}${id}`);
        setData(response.data)
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchData();
  }, [url,id]);
  return data;
};

export default useFetchData;
