import {Routes, Route} from 'react-router-dom'
import { Home, Product, ProductDetail } from '../pages'



const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
    </div>
  )
}

export default Routers
