import { Link } from "react-router-dom"
import {Container,Navbar,Nav} from "react-bootstrap"

const Error = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/noodles-food/" className="text-light text-uppercase fs-5 p-0 text-center">Noodles<br/>Food</Navbar.Brand>
          <Navbar>
            <Nav className="ms-auto align-items-center text-warning">
              <Nav.Link href="/noodles-food/signup" className="sign text-light p-2 m-2 ps-3 pe-3 text-uppercase text-bg-warning rounded-2">Sign up</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <div className="error d-flex justify-content-center align-items-center">
          <div className="text-light text-uppercase">
            <h1 className="text-center">Error 404</h1>
            <h1>Page Not Found</h1>
            <Link to="noodles-food/" className="error-btn rounded-2 text-center text-light d-block fs-3 mt-5 bg-warning p-2">Go back</Link>
          </div>
        </div>
    </>
  )
}

export default Error
