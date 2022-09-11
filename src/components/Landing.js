import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {landingObj} from "../data/Data"
import {Row,Col, Container} from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaAngleRight} from "react-icons/fa"
 
const Landing = () => {
   const [hover,setHover] = useState(false)
   const onHover = () =>{
    setHover(!hover)
   }
  return (
    <div id="home">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="landing"
      >
        <Container>
        {
          landingObj.map(land =>(
            <SwiperSlide key={land.img} className="d-flex justify-content-center ">
              <Row className="align-items-center">
                <Col lg={6} key={land.img} className="order-2 order-lg-1  text-light text-center text-lg-start">
                    <div className="landing-text">
                      <h1 className="text-uppercase m-0">{land.title1}</h1>
                      <h1 className="text-uppercase m-0 mb-2">{land.title2}</h1>
                      <p className="m-auto p-2">{land.body}</p>
                      <button to='signup' 
                                          onMouseEnter={onHover} 
                                          onMouseLeave={onHover} 
                                          className={hover?"text-bg-warning rounded-2 border-0 m-0 mt-lg-3 overflow-hidden":"text-bg-danger rounded-2 border-0 m-0 mt-lg-3 overflow-hidden"}>
                                            <Link to='signup' className="d-flex justify-content-between gap-2 align-items-center position-relative text-uppercase p-3 ps-5 text-light">
                                              <div className="arrow position-absolute start-0 d-flex justify-content-center align-items-center"><FaAngleRight size={30}/></div> Get Order
                                            </Link>
                      </button>
                      
                    </div>  
                </Col>
                <Col lg={6} className="d-flex justify-content-center align-items-center order-1 order-lg-2">
                  <div className="landing-img rounded-4 overflow-hidden">
                    <img className="img-fluid" src={land.img} alt="" />
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          ))
        }
        </Container>
      </Swiper>
    </div>
  )
}

export default Landing
