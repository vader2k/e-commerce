import { useState } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuHeart } from "react-icons/lu";
import { LuScale } from "react-icons/lu";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  const id = useParams().id
  const [picture, setPicture] = useState('img')
  const [quantity, setQuantity] = useState(1)
  
 const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

 const handlePictureClick = (pictureType) => {
  setPicture(pictureType);
};

  return (
    <div className="flex items-start justify-center mb-20 px-20 gap-10">
      {error 
          ? "something went wrong" 
          : loading 
          ? "loading" 
          :
          (
          <>
          <div className="flex w-full flex-col gap-10 flex-1 h-[400px]">
            <img  
              className="h-[50%]  object-cover" 
              src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} 
              alt="first-image" 
              onClick={() => handlePictureClick('img')}
            />

            <img 
              className="h-[50%] object-cover" 
              src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} 
              alt="second image" 
              onClick={() => handlePictureClick('img2')}
            />
          </div>


          <div className="flex-[2] h-[70vh] w-full">
            <img 
              className="h-full w-full object-cover" 
              src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.[picture]?.data?.attributes?.url} 
              alt="displayed image" 
            />
          </div>



            <div className="flex-[2] flex flex-col gap-6 ">
              <h1 className="text-[1.5rem] font-bold">{data?.attributes?.title}</h1>
              <span className="text-[1.3rem] text-blue-400">{data?.attributes?.price}</span>
                <p className="text-[0.9rem] text-gray-500"> {data?.attributes?.desc}</p>
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
          </>)
      }
    </div>
  )
}

export default ProductDetail
