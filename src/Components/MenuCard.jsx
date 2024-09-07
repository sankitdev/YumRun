import { IMG_URL } from "../constant";
import icon from '../assets/star.svg'
const MenuCard = ({ items }) => {
    const truncateDescription = (description, maxLength) => {
        if (description?.length > maxLength) {
          return `${description.slice(0, maxLength)}...more`;
        }
        return description;
      };
  return (
    <>
      {items?.slice(1)?.map((rescard, index) => (
        <div key={index} className="dark:text-white w-full md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-bold">{rescard?.card?.card?.title}</h1>
          {rescard?.card?.card?.itemCards?.map((item) => (
            <div key={item?.card?.info?.id} className="flex rounded-md p-2 my-2 w-full border-2 border-gray-200">
              <div className="w-4/5">
                <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>
                <p className="pb-1">
                  <span className="font-semibold">₹{Math.round(item?.card?.info?.price / 100)}</span> <span></span>
                </p>
                <p className="flex"><img src={icon} alt=""/> <span className="text-green-600 font-medium">{item?.card?.info?.ratings?.aggregatedRating?.rating}</span></p>
                <p className="leading-4 text-gray-600">{truncateDescription(item?.card?.info?.description, 100)}</p>
              </div>
              <div className="text-center h-40 overflow-hidden rounded-lg shadow-md">
                <img className="w-44 h-3/4 object-cover object-center" src={`${IMG_URL}${item?.card?.info?.imageId}`} alt="" />
                <button className="w-2/3 py-1 border-2 border-grey dark:border-white font-bold text-green-500 rounded-md hover:bg-slate-200">Add</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default MenuCard;
