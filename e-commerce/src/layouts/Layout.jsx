import Routers  from "../routes/Routers"
import { Footer, Navbar} from '../components'

const Layout = () => {
  return (
    <>
      <Navbar/>
        <main>
          <Routers/>
        </main>
      <Footer/>
    </>
  )
} 

export default Layout