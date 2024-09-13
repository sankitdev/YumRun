import { IMG_URL } from "../../constant";
import icon from '../../assets/star.svg'
const MenuCard = ({ items }) => {
    const truncateDescription = (description, maxLength) => {
        if (description?.length > maxLength) {
          return `${description.slice(0, maxLength)}...more`;
        }
        return description;
      };
  return (
    <>
      {items && Array.isArray(items) ? (items?.slice(1)?.map((rescard, index) => {
        const {card} = rescard?.card || {}
        const {title, itemCards} = card || {}
              return ( <div key={index} className="w-full md:w-1/2 lg:w-1/2">
                <h1 className="text-xl font-bold">{title}</h1>
                {itemCards?.map((item) =>{
                  const{info}= item?.card || {}
                  const{id,name,price,ratings,description,imageId} = info
                  return (
                    <div key={id} className="flex rounded-md p-2 my-2 w-full shadow-md dark:shadow-slate-700">
                    <div className="w-4/5">
                      <h1 className="text-lg font-semibold">{name}</h1>
                      <p className="pb-1">
                        <span className="font-semibold">₹{Math.round(price / 100)}</span> <span></span>
                      </p>
                      <p className="flex"><img src={icon} alt=""/> <span className="text-green-600 font-medium">{ratings?.aggregatedRating?.rating}</span></p>
                      <p className="leading-4 text-gray-600 dark:text-gray-300">{truncateDescription(description, 100)}</p>
                    </div>
                    <div className="text-center h-40 overflow-hidden rounded-lg shadow-md">
                      <img className="w-44 h-3/4 object-cover object-center hover:scale-105 transition-all duration-150" src={`${IMG_URL}${imageId}`} alt="" />
                      <button className="w-2/3 py-1 border-2 border-grey dark:border-white font-bold text-green-500 rounded-md hover:bg-slate-200">Add</button>
                    </div>
                  </div>
                  )
                } )}
        </div>)
      })):"Loading...."}
    </>
  );
}

export default MenuCard;
