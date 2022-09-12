import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import {AiOutlineArrowRight} from "react-icons/ai"


const Footer = () => {
  return (
    <div className="footer pt-5" id="Subscribe">
      <Container>
        <Row className="pb-5 align-items-center text-warning">
            <Col xl={3} className="mb-3">
                <h3><a href="#home" className="text-center d-block text-light text-uppercase">Noodles <br/> Food</a></h3>
            </Col>
            <Col xl={6} className="mb-3">
                <div className="links d-flex justify-content-between flex-column flex-md-row align-items-center text-warning">
                    <a href="#home" className="text-light text-uppercase ps-2 pe-2">Home</a>+
                    <a href="#menu" className="text-light text-uppercase ps-2 pe-2">Menu</a>+
                    <a href="#gategories" className="text-light text-uppercase ps-2 pe-2">Gategories</a>+
                    <a href="#product" className="text-light text-uppercase ps-2 pe-2">Product</a>+
                    <a href="#about" className="text-light text-uppercase ps-2 pe-2">About</a>+
                    <a href="#Subscribe" className="text-light text-uppercase ps-2 pe-2">Subscribe</a>
                </div>
            </Col>
            <Col xl={3} className="mb-3 text-center text-xl-start">
                <div className="subscribe">
                    <h3 className="text-light text-uppercase">Subscribe the NewsLetter</h3>
                    <form action="" className="mt-4 mt-xl-2">
                        <input type="text" className="p-2 border-0"/>
                        <button className="border-0 p-2 ps-3 pe-3 bg-warning"><Link to="signup" className="text-light"><AiOutlineArrowRight size={20}/></Link></button>
                    </form>
                </div>
            </Col>
        </Row>
        <div className="copyright text-uppercase text-light text-center">
            copyright &copy; 2022 ,Noodles Food . All right reversed
        </div>
      </Container>
    </div>
  )
}

export default Footer
