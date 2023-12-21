import { useEffect, useState } from 'react'
import Card from '../Ui/Card'
import axios from 'axios'

const FeaturedProduct = ({type}) => {


  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      try {
      const res = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/products?populate=*&[filters][type][$eq]=${type}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`
        }
      })
      setData(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div className='w-[70%] mx-auto my-12'>
      <div className='flex items-center justify-between mb-[50px]'>
        <h1 className='flex-2 text-[1.5rem] font-medium'>{type} Products</h1>
        <p className='flex-[3] max-w-[600px] text-[0.9rem] text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, provident tempore, earum aspernatur reiciendis esse harum aut neque nihil, maiores nostrum vel dicta asperiores soluta. Doloribus, tenetur, voluptate corrupti fugiat provident nobis deleniti cum fuga dolores quas, ipsam nulla eveniet?</p>
      </div>

       <div className='flex justify-center gap-[50px]'>
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
       </div>
    </div>
  )
}

export default FeaturedProduct