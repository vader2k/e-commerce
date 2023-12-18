import Card from '../Ui/Card'

const FeaturedProduct = ({type}) => {

  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1614093302611-8efc4de12964?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long Sleeve Graphic T-shirt",
      isNew : true,
      oldPrice : 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1613835128931-c23ec37fa798?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Coat",
      isNew : true,
      oldPrice : 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1700676194542-1ff76ca23729?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Skirt",
      isNew : false,
      oldPrice : 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1693592992203-67776cd88e8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hat",
      isNew : false,
      oldPrice : 19,
      price: 12,
    }
  ]

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