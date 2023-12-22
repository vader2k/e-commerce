import Card from '../Ui/Card'
import useFetch from '../hooks/useFetch'

const FeaturedProduct = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='w-[70%] mx-auto my-12'>
      <div className='flex items-center justify-between mb-[50px]'>
        <h1 className='flex-2 text-[1.5rem] font-medium'>{type} Products</h1>
        <p className='flex-[3] max-w-[600px] text-[0.9rem] text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, provident tempore, earum aspernatur reiciendis esse harum aut neque nihil, maiores nostrum vel dicta asperiores soluta. Doloribus, tenetur, voluptate corrupti fugiat provident nobis deleniti cum fuga dolores quas, ipsam nulla eveniet?</p>
      </div>

       <div className='flex justify-center gap-[50px]'>
        {loading 
          ? "loading" :
            data.map(item => (
              <Card item={item} key={item.id}/>
          ))}
       </div>
    </div>
  )
}

export default FeaturedProduct