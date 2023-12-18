import { FaFacebookSquare , FaInstagram, FaTwitter, FaGoogle , FaPinterest} from "react-icons/fa";


 const Contact = () => {
  return (
    <div className="bg-blue-500 text-white flex gap-[10rem] justify-center items-center h-[70px] my-20">
      <div className="text-[1.2rem]">BE IN TOUCH WITH US</div>

      <form action="submit" className="">
        <input 
          placeholder="Enter your e-mail" 
          type="text"
          className="p-3 outline-none rounded-l-[10px] text-[0.9rem]" />

        <button className="bg-gray-800 p-3 rounded-r-[10px]">JOIN US</button>
      </form>

      <div className="flex items-center gap-3">
        <FaFacebookSquare />
        <FaInstagram/>
        <FaTwitter/>
        <FaGoogle />
        <FaPinterest />
      </div>
    </div>
  )
}

export default Contact
