import Banner from "./Banner";
import { URL_HOME } from "../../constant";
import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import TopRest from "./TopRest";

const Body = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(URL_HOME).then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="px-10 mt-6">
      {data && (
        <>
          <Banner BannerData={data} />
          <TopRest RestData={data?.data?.cards[1]?.card} />
          <RestaurantList RestData={data?.data?.cards} />
        </>
      )}
    </div>
  );
};

export default Body;
