import { useState } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuHeart } from "react-icons/lu";
import { LuScale } from "react-icons/lu";

const ProductDetail = () => {

  const [picture, setPicture] = useState(0)
  const [quantity, setQuantity] = useState(1)
  

 

  const data = [
    "https://images.unsplash.com/photo-1638916632822-893c73d6bead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1638916607370-d9f1bdb1fab0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  return (
    <div className="flex items-start justify-center mb-20 px-20 gap-10">
      <div className="flex w-full flex-col gap-10 flex-1 h-[400px]">
        <img className="h-[50%]  object-cover" src={data[0]} alt="first-image" onClick={e=>setPicture(0)}/>
        <img className="h-[50%] object-cover" src={data[1]} alt="second image" onClick={e=>setPicture(1)}/>
      </div>


      <div className="flex-[2] h-[70vh] w-full">
        <img className="h-full w-full object-cover" src={data[picture]} alt="displayed image" />
      </div>



      <div className="flex-[2] flex flex-col gap-6 ">
         <h1 className="text-[1.5rem] font-bold">Long Sleeve Plain T-shirt</h1>
         <span className="text-[1.3rem] text-blue-400">$19.9</span>
          <p className="text-[0.9rem] text-gray-500"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt laboriosam culpa dolore cum atque numquam dolorum. Error ea non maxime, facere recusandae, fuga quae assumenda et asperiores mollitia reprehenderit.</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-300 text-black" onClick={()=>setQuantity(quantity === 1?1 : quantity - 1)}>-</button>
            <span className="text-[1.1rem]">{quantity}</span>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-300 text-black" onClick={()=> setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="w-fit min-w-[150px] py-2 px-6 bg-blue-500 text-white flex gap-3 items-center justify-center">
            <HiOutlineShoppingCart className="text-[1.5rem]"/> <p className="text-[0.8rem]">ADD TO CART</p>
          </button>
          <div className="flex items-center gap-5 text-blue-500 text-[0.8rem]">
            <div className="flex gap-3 items-center"><LuHeart className="text-[1.5rem]"/> ADD TO WISHLIST</div>
            <div className="flex gap-3 items-center"><LuScale className="text-[1.5rem]"/>ADD TO COMPARE</div>
          </div>

          <div className="text-[0.8rem] text-gray-500 flex flex-col gap-4">
            <p>Vendor: polo</p>
            <p>Product Type: T-shirt</p>
            <p>Tag: Tshirt, Women, Top</p>
          </div>

          <hr />
          <div className="text-[0.9rem] text-gray-500 gap-4 flex flex-col">
            <span>Description</span>
            <div className="border-b border-t w-fit py-3">ADDITIONAL INFORMATION</div>
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default ProductDetail
