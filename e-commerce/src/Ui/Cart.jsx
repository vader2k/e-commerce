import { IoTrashOutline } from "react-icons/io5";
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector(state=>state.cart.products)

  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0;

    products.forEach((items) => (total += items.quantity * items.price))
    return total.toFixed(2)
  }
  return (
    <div className="absolute flex flex-col p-5 gap-3 w-[400px] overflow-hidden right-[20px] top-[80px] z-[40] bg-white">
      <h2 className="text-[1.3rem] text-gray-500">Products in your Cart</h2>
        {
          products?.map((items)=>(
            <div key={items.id} className="h-[200px] flex justify-between gap-5 items-center">
              <div>
                <img className="h-[150px] object-contain" src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + items.img} alt="items in cart" />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-gray-500 font-medium">{items.name}</h1>
                <p className="text-[0.8rem] text-gray-500">{items.desc.substring(0,100)}</p>
                <div className="flex gap-3">{items.quantity} x <span className="text-blue-500">{items.price}</span></div>
             </div>
            < div>
                <IoTrashOutline className="text-red-600 text-[1.5rem] cursor-pointer" onClick={()=>dispatch(removeItem(items.id))}/>
              </div>
            </div>
          ))
        }
      <div className="flex justify-between font-semibold">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="items-start w-[250px] px-4 py-2 text-white bg-blue-500">PROCEED TO CHECKOUT</button>
      <span className="text-[0.8rem] text-red-500 cursor-pointer" onClick={()=>dispatch(resetCart())}>reset cart</span>
    </div>
  )
}

export default Cart