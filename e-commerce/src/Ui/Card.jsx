import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='w-[300px] flex flex-col gap-[10px]'>
        <div className='w-full h-[400px] overflow-hidden relative'>
          <img className='card w-full h-full object-cover absolute z-20 hover:z-0' src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.attributes.img.data.attributes.url} alt="first-image"/>
          <img className='w-full h-full object-cover absolute z-10' src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.attributes.img2.data.attributes.url} alt="second-image"/>
          {item?.attributes.isNew && <span className='absolute top-[5px] left-[5px] text-teal-400 bg-white text-[0.9rem] py-[3px] px-[5px] z-30'>New Season</span>}
        </div>
        <h2 className='font-normal text-[1.1rem]'>{item?.attributes.title}</h2>
         <div className='flex justify-between'>
          <h3 className='text-gray-400 line-through'>${item?.attributes.oldPrice || item?.attributes.price+20}</h3>
          <h3>${item?.attributes.price}</h3>
         </div>
      </div>
    </Link>
  )
}

export default Card;  