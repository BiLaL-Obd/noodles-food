import {menuObj} from "../data/Data"
import {Container,Row,Col} from "react-bootstrap"
import {GiShoppingCart} from "react-icons/gi"
import {MdOutlineFastfood} from "react-icons/md"
import { Link } from "react-router-dom"

const Menu = () => {

  return (
    <div className="menu position-relative pt-5 pb-5" id="menu">
        <h1 className="main-title text-uppercase text-light text-center mb-5">Our Menu</h1>
        <Container>
        {
            menuObj.map((menu,index)=>(
                <Link to='/noodles-food/signup'  key={index}>
                    <div className="box text-uppercase text-light m-auto p-4">
                        <Row className="align-items-center text-center text-md-start">
                            <Col md={5}><h3>{menu.title}</h3></Col>
                            <Col md={1} className="food pt-3 pb-3 m-auto m-lg-0 mt-2 mb-2 d-flex justify-content-center align-items-center "><MdOutlineFastfood size={20}/></Col>
                            <Col md={5}><p className="m-0">{menu.body}</p></Col>
                            <Col md={1} className="shop position-absolute end-0 h-100 d-none d-lg-flex justify-content-center align-items-center"><GiShoppingCart size={25}/></Col>    
                        </Row>
                    </div>
                </Link>
            ))
        }
        </Container>
    </div>
  )
}

export default Menu
