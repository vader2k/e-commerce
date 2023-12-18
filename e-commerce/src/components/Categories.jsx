import {Link} from 'react-router-dom'
const Categories = () => {
  const data = [
    "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554342597-bfd585b46463?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
    <div className="flex items-center justify-center gap-2 w-full h-[80vh] overflow-hidden my-20 px-2">
      <div className="flex-1">
        <div className="h-full flex flex-col gap-2 ">
          <div className=" object-contain relative">
            <img src={data[0]} alt="sales"/>
            <button className='cat-btn absolute left-0 right-0 bottom-[150px] w-fit min-w-[100px]  bg-white p-5 m-auto hover:bg-blue-500'>
              <Link to='/products/1'>
                SALE
              </Link>
            </button>
          </div>
          <div className="object-contain relative">
            <img src={data[1]} alt="women" /> 
            <button className='cat-btn absolute left-0 right-0 bottom-[290px] top-0 h-[50px] flex items-center w-fit min-w-[100px] bg-white p-5 m-auto  hover:bg-blue-500'>
              <Link to='/products/1'>
                WOMEN
              </Link>
            </button>
          </div>
        </div>
      </div>


      <div className="flex-1">
        <div className="relative">
          <img src={data[2]} alt="new season" />
          <button className='cat-btn absolute top-0 left-0 bottom-0 right-0 h-[50px] m-auto w-fit min-w-[100px] bg-white p-5 flex items-center  hover:bg-blue-500'>
              <Link to='/products/1'>
                NEW SEASON
              </Link>
            </button>
        </div>
      </div>



      <div className="flex-[2]">
        <div className="flex flex-col gap-2 h-full">
          <div className="h-[50%] flex gap-2">
            <div className="h-full relative">
              <img className="object-contain" src={data[3]} alt="men" />
              <button className='cat-btn absolute left-0 right-0 bottom-[150px] w-fit min-w-[100px]  bg-white p-5 m-auto  hover:bg-blue-500'>
              <Link to='/products/1'>
                MEN
              </Link>
            </button>
            </div>
            <div className="h-full relative">
              <img className="object-contain" src={data[4]} alt="accessories" />
              <button className='cat-btn absolute left-0 right-0 bottom-[150px] w-fit min-w-[100px]  bg-white p-5 m-auto hover:bg-blue-500'>
              <Link to='/products/1'>
                WOMEN
              </Link>
            </button>
            </div>
          </div>



          <div className="h-[50%] relative">
            <img src={data[5]} alt="shoes" />
            <button className='cat-btn absolute left-0 right-0 bottom-[290px] top-0 h-[50px] flex items-center w-fit min-w-[100px] bg-white p-5 m-auto  hover:bg-blue-500'>
              <Link to='/products/1'>
                SHOES
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories