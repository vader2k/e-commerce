import { useState } from "react";
import { RxDot } from "react-icons/rx";

const Slider = () => {

  const [currentSlide, setCurrentSLide] = useState(0)

  const data = [
    "https://images.unsplash.com/photo-1484328256245-34b71758c30b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

const prevSlide = () => {
  setCurrentSLide(currentSlide === 0 ? 2 : (prev) => prev -1)
}

const nextSlide = () => { 
  setCurrentSLide(currentSlide === 2 ? 0 : (prev) => prev + 1)
}





  return (
    <div className="h-[cal(100vh-80px)] w-[100vw] relative overflow-hidden">
        <div className="carousel w-[300vw] overflow-hidden h-[100%] flex" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          <img className="w-[100vw] h-[100vh] object-cover" src={data[0]} alt="" />
          <img className="w-[100vw] h-[100vh] object-cover" src={data[1]} alt="" />
          <img className="w-[100vw] h-[100vh] object-cover" src={data[2]} alt="" />
        </div>

        <div className="absolute w-[100px] left-0 right-0 bottom-[100px] m-auto flex gap-1">
          <div>
            <RxDot 
            onClick={prevSlide}
            className="carousel-btn text-[3rem] text-white hover:bg-blue-100 hover:text-gray-500"/>
          </div>
          <div>
            <RxDot 
            onClick={nextSlide}
            className="carousel-btn text-[3rem] text-white hover:bg-blue-100 hover:text-gray-500"/>
          </div>
        </div>
    </div>
  )
}

export default Slider