import { Container,Row,Col } from "react-bootstrap"
import tomatoImg from "../images/gategory-1.jpg"
import saladImg from '../images/gategory-2.jpg'


const Gategories = () => {
  return (
    <div className="gategory position-relative pt-5 pb-5" id="gategories">
      <h1 className="main-title text-uppercase text-light text-center mb-5">Gategories</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="box tomato mb-3 position-relative">
              <Row className="align-items-center">
                <Col xs={6}>
                  <h3 className="text-light text-uppercase ps-3 position-relative">Penne Pasta In Tomato Sauce</h3>
                </Col>
                <Col xs={6}>
                  <img className="img-fluid" src={tomatoImg} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="box salad mb-3 position-relative">
            <Row className="align-items-center">
                <Col xs={6}>
                <h3 className="text-light text-uppercase ps-3 position-relative">Pasta Colored Farfalle Salad</h3>
                </Col>
                <Col xs={6}>
                  <img className="img-fluid" src={saladImg} alt="" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gategories
