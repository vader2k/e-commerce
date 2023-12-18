import {useState} from 'react'
import flag from '../assets/en.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline , IoHeartOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom"
import Cart from '../Ui/Cart'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 px-10 relative'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2'>
          <img src={flag} alt="flag"/>
          <MdKeyboardArrowDown />
        </div>
        <div className='flex items-center gap-2'>
          <span>USD</span>
          <MdKeyboardArrowDown/>
        </div>
        <Link to="/products/1"><a href="">Men</a></Link>
        <Link to='/products/2'><a href="">Women</a></Link>
        <Link to='/products/3'><a href="">Children</a></Link>
        <Link to='/products/4'><a href="">Accessories</a></Link>

      </div>

      <div className='flex items-center gap-5 text-[2rem] '>VADERSTORE</div>

      <div className='flex items-center gap-5'>
        <Link to='/'><a href="homepage">Homepage</a></Link>
        <Link to='/about'><a href="about">About</a></Link>
        <Link to='/contact'><a href="contact">Contact</a></Link>
        <Link to='/stores'><a href="stores">Stores</a></Link>

        <AiOutlineSearch className='text-[1.2rem] text-gray-400 cursor-pointer'/>
        <IoPersonOutline className='text-[1.2rem] text-gray-400 cursor-pointer'/>
        <IoHeartOutline className='text-[1.2rem] text-gray-400 cursor-pointer'/>
        <div className='relative cursor-pointer'>
          <GiShoppingCart className='text-[1.2rem] text-gray-400' onClick={()=>setOpen(!open)}/>
          <div className='absolute bg-blue-500 h-[20px] w-[20px] flex items-center justify-center text-white text-[0.9rem] rounded-[50%] top-[-15px] right-[-10px]'>0</div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar