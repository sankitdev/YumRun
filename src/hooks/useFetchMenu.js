import { useState, useEffect } from "react";
import preload from "../preload.js";
const useFetchData = (url, id) => {
  const [data, setData] = useState(preload);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch(
          `https://yum-backend.onrender.com/api/fetchdata`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: url, id: id }),
          }
        );
        const finalData = await response2.json();
        setData(finalData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchData();
  }, [url, id]);
  return data;
};

export default useFetchData;
