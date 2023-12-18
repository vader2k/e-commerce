import {Slider, FeaturedProduct, Categories, Contact} from '../components'

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="Featured"/>
      <Categories />
      <FeaturedProduct type="Trending"/>
      <Contact />
    </div>
  )
}

export default Home
