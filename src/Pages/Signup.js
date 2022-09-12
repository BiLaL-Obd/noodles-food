import {Container,Navbar,Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
import {BsFillEyeSlashFill} from "react-icons/bs"
import { useState } from "react"

const Signup = () => {
  const [showPass,setShowPass] = useState('password')
  const handlerShowPass = () =>{
    showPass === 'password' ? setShowPass('text') : setShowPass('password')
  }
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')
  const [msg,setMsg] = useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!user || !password) return;
    setMsg(`Hello ${user}`)
  }

  return (
    <div className="signup position-relative">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/noodles-food/" className="text-light text-uppercase fs-5 p-0 text-center">Noodles<br/>Food</Navbar.Brand>
          <Navbar>
            <Nav className="ms-auto align-items-center text-warning">
              <Nav.Link href="/noodles-food/" className="sign text-light p-2 m-2 ps-3 pe-3 text-uppercase text-bg-warning rounded-2">Back to Homepage</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <div className="error forms p-3 p-md-5 position-absolute rounded-3">
          <form action="" onSubmit={handleSubmit}>
            {msg && <h3 className="text-center text-warning">{msg}</h3>}
            <h3 className="text-light text-uppercase mb-4">Login To Noodles Food</h3>
            <div>
              <label htmlFor="user" className="text-warning text-uppercase mb-2 mt-3">UserName</label><br/>
              <input type="text" value={user} onChange={e =>setUser(e.target.value)} className="p-2 w-100" />
            </div>
            <div>
              <label htmlFor="pass" className="text-warning text-uppercase mb-2 mt-3">Password</label><br/>
              <div className="eye  position-relative">
                <input type={showPass} value={password} onChange={e =>setPassword(e.target.value)}  className="p-2 w-100" />
                <BsFillEyeSlashFill onClick={handlerShowPass} className="position-absolute text-warning" size={20}/>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <input type="submit" value="Login" className="mt-3 text-uppercase fs-5 ps-4 pe-4 pt-2 pb-2 bg-warning text-light rounded-2" />
            </div>
            <div className="mt-3 links">
                <Link to="/noodles-food/" className="text-light d-block pt-2 pb-1">Register Now</Link>
                <Link to="/noodles-food/" className="text-light d-block pt-2 pb-1">Forget Password ?</Link>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup
