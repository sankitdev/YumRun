import { useDispatch, useSelector } from "react-redux"
import FoodItems from "./FoodItems"
import { clearCart } from "../utils/cartSlice.js"
const Cart = ()=>{
  const cartItems = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()
  const handleClear = () =>{
    dispatch(clearCart())
  }
  return (
    <div className="px-10 my-4">
      <h1 className="text-xl font-semibold my-4 text-center">Total Cart Items: {cartItems.length} </h1>
     <div className="flex gap-5 flex-wrap justify-center items-center">
     {cartItems.map(items=>(
        <FoodItems key={items.id} {...items}/>
      ))}
     </div>
     {/* <button className="text-white px-2 py-1 rounded-md bg-red-500 font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300" onClick={handleClear}>Clear Cart</button> */}
    </div>
  
)
}
export default Cart