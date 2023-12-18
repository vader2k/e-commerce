import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='w-[300px] flex flex-col gap-[10px]'>
        <div className='w-full h-[400px] overflow-hidden relative'>
          <img className='card w-full h-full object-cover absolute z-20 hover:z-0' src={item.img} alt="first-image"/>
          <img className='w-full h-full object-cover absolute z-10' src={item.img2} alt="second-image"/>
          {item.isNew && <span className='absolute top-[5px] left-[5px] text-teal-400 bg-white text-[0.9rem] py-[3px] px-[5px] z-30'>New Season</span>}
        </div>
        <h2 className='font-normal text-[1.1rem]'>{item.title}</h2>
         <div className='flex justify-between'>
          <h3 className='text-gray-400 line-through'>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
         </div>
      </div>
    </Link>
  )
}

export default Card;  