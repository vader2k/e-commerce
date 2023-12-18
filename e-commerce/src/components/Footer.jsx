import { Link } from "react-router-dom"
import banner from '../assets/payment.png'
const Footer = () => {
  return (
    <>
      <div className="w-[80%] m-auto flex items-start justify-between">
      <div className="flex gap-[20rem]">
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.2rem] font-medium text-[#555]">Categories</h2>
          <div className="flex flex-col gap-4 text-[0.9rem] text-gray-500">
            <Link>Women</Link>
            <Link>Men</Link>
            <Link>Shoes</Link>
            <Link>Accessories</Link>
            <Link>New Arrivals</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[1.2rem] font-medium text-[#555]">Links</h2>
          <div className="flex flex-col gap-4 text-[0.9rem] text-gray-500">
            <Link>FAQ</Link>
            <Link>Pages</Link>
            <Link>Stores</Link>
            <Link>Compare</Link>
            <Link>Cookies</Link>
          </div>
        </div>
      </div>
      
      <div className="flex">
        <div className="max-w-[400px] flex flex-col gap-4">
          <h2 className="text-[1.2rem] font-medium text-[#555]">About</h2>
          <p className="text-[0.9rem] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae provident, consequatur amet cumque debitis, expedita sed at aperiam rerum inventore quam asperiores quasi. Reiciendis tenetur ipsam vel facere ad?</p>
        </div>

        <div className="max-w-[400px] flex flex-col gap-4">
          <h2 className="text-[1.2rem] font-medium text-[#555]">Contact</h2>
          <p className="text-[0.9rem] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae provident, consequatur amet cumque debitis, expedita sed at aperiam rerum inventore quam asperiores quasi. Reiciendis tenetur ipsam vel facere ad?</p>
        </div>
      </div>
    </div>

    <div className="w-[80%] m-auto flex items-start justify-between mt-20">
      <div>
        <span className="font-semibold text-blue-500 text-[1.5rem]">Vaderstore</span>
        <p className="text-[0.9rem] text-gray-500">@copyright 2023 All Rights Reserved</p>
      </div>

      <div>
        <img className="w-[500px]" src={banner} alt="payment"/>
      </div>
    </div>
    </>
  )
}

export default Footer