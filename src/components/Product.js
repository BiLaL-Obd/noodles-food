import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Container } from "react-bootstrap";
import {productObj} from "../data/Data"
import {AiFillStar} from "react-icons/ai";
import {GiShoppingCart} from "react-icons/gi";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product pt-5 pb-5" id="product">
      <h1 className="main-title text-uppercase text-light text-center mb-5">Product</h1>
      <Container>
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },"@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                "@1.75": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            className="product-slide"
        >
            {
                productObj.map(product=>(
                    <SwiperSlide key={product.id}>
                        <Link to="signup">
                          <div className="box position-relative rounded-3 text-light overflow-hidden">
                              <div className="img overflow-hidden rounded-3 mb-3">
                                  <img className="img-fluid" src={product.img} alt="" />
                              </div>
                              <h4 className="ps-3 mb-1">{product.title}</h4>
                              <div className="stars ps-3 text-warning">
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                                <AiFillStar size={20}/>
                              </div>
                              <p className="ps-3 mt-1">{product.price}</p>
                              <div className="shop position-absolute end-0 bottom-0 text-bg-warning text-light d-flex justify-content-center align-items-center">
                                <GiShoppingCart size={30}/>
                              </div>
                          </div>
                        </Link>
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
      </Container>
    </div>
  )
}

export default Product
