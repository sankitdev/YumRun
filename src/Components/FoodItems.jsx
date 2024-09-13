import { IMG_URL } from "../constant"
import { MdDelete } from "react-icons/md";
import {useDispatch} from "react-redux"
import {removeItem} from "../utils/cartSlice.js"
const FoodItems = ({name, description, imageId, price})=>{
    const dispatch = useDispatch()
    const deleteItem = (name)=>{
        dispatch(removeItem(name));
    }
    return (
        <div className="flex flex-col w-60 h-60 shadow-md px-2 py-2 dark:shadow-slate-700">
            <img src={IMG_URL + imageId} className="h-1/2 mb-2 object-cover" />
            <h1 className="font-bold truncate">{name}</h1>
            <h2 className="truncate">{description}</h2>
            <h4 className="font-semibold"> ₹ {price / 100}</h4>
            {/* <button className=" mx-auto rounded-md text-2xl text-red-500 font-semibold hover:text-red-600 hover:scale-110 transition-all duration-300"><MdDelete /></button> */}
            <MdDelete className="mx-auto rounded-md text-2xl text-red-500 font-semibold hover:text-red-600 hover:scale-125 transition-all duration-300" onClick={() => deleteItem(name)} />
        </div>
    )
}
export default FoodItems