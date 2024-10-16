import { useEffect, useState } from "react";
import axios from "axios";
// import useFetchMenu from "../utils/useFetchMenu"
import { PRE_SEARCH } from "../constant.js";
import Banner from "./Home/Banner.jsx";
const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await axios.get(PRE_SEARCH);
        // console.log(response)
        console.log(Object.values(response.data.data.cards));
        setData(Object.values(response.data.data.cards));
      } catch (error) {
        console.error("Error in Search Component", error);
        return <p>Error Finding Data</p>;
      }
    };
    fetchSearch();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10 px-10">
      <div className="w-full md:w-3/4 lg:w-3/4">
        <input
          className="dark:bg-slate-700 dark:text-white bg-gray-100 text-gray-900 placeholder-gray-500 p-4 rounded-l-lg w-full outline-none shadow-lg focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
          value={text}
          type="text"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <Banner
          title={data?.[1]?.card?.card?.header?.title}
          gridList={data?.[1]?.card?.card?.imageGridCards.info}
          className="gap-5 h-36"
        />
      </div>
    </div>
  );
};

export default Search;
