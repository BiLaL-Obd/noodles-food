import About from "../components/About"
import Footer from "../components/Footer"
import Gategories from "../components/Gategories"
import Landing from "../components/Landing"
import Menu from "../components/Menu"
import NavbarMenu from "../components/Navbar"
import Product from "../components/Product"

const Home = () => {
  return (
    <>
      <NavbarMenu/>
      <Landing/>
      <Menu/>
      <Gategories/>
      <Product/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home
