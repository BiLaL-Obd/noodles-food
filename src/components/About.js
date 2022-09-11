import { useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import aboutImg from "../images/about.jpg"
import { FaAngleRight } from "react-icons/fa"

const About = () => {
    const [hover,setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <div className="about position-relative pt-5 pb-5" id="about">
      <Container>
        <Row>
            <Col lg={6}>
                <img className="img-fluid mb-3" src={aboutImg} alt="" />
            </Col>
            <Col lg={6} className="ps-lg-5 d-flex align-items-center text-center text-lg-start">
                <div className="about-info">
                    <h1 className="main-title text-uppercase text-light mb-3">About us</h1>
                    <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <button to='signup' 
                                            onMouseEnter={onHover} 
                                            onMouseLeave={onHover} 
                                            className="about-btn border-0 m-0 mt-lg-3 overflow-hidden">
                                                <Link to='signup' className="d-flex justify-content-between gap-2 align-items-center position-relative p-3 ps-5 text-light">
                                                <div className="arrow position-absolute start-0 d-flex justify-content-center align-items-center"><FaAngleRight size={30}/></div> Learn More
                                                </Link>
                    </button>
                </div>
            </Col>
        </Row>
        <div className="service d-flex justify-content-center align-items-center mt-5 ">
          <div className="service-info bg-light pt-4 pb-4 ps-5 pe-5 rounded-2 text-center text-md-start text-uppercase">
            <h1 className="ps-3 pe-3">Take - OUt Service</h1>
            <div className="date d-flex justify-content-evenly flex-column flex-md-row align-items-center fs-5">
              <span>Availabel Date</span>
              <span>+</span>
              <span>9Am - <span className="text-warning">2Pm</span></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
