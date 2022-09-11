import { Navbar,Container,Nav } from "react-bootstrap";
import {FaBars} from 'react-icons/fa'
import {Link} from "react-scroll"

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/" className="text-light text-uppercase fs-5 p-0 text-center">Noodles<br/>Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-warning shadow-none " >
          <FaBars size={22} className='text-light'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center text-warning">
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  Home
                </Link>+
                <Link
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  Menu
                </Link>+
                <Link
                  to="gategories"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  Gategories
                </Link>+
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  Product
                </Link>+
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  About
                </Link>+
                <Link
                  to="Subscribe"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="text-light p-2 m-2 text-uppercase"
                  >
                  Subscribe
                </Link>
            <Nav.Link href="/signup" className="sign text-light p-2 m-2 ps-3 pe-3 text-uppercase text-bg-warning rounded-2">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
