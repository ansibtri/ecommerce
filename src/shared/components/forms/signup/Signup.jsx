import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Input from '../../inputs/Input'
import ModalContext from '../../modal/modalContext/ModalContext'
const Signup = () => {
  const {setModalType} = useContext(ModalContext);
  return (
    <div className="forms">
      <h1>Sign Up</h1>
      <p>Already have an account yet? <span style={{"cursor":"pointer"}} onClick={()=>{setModalType("login")}}>Login</span></p>
      <form>
        <div className="form-group">
          <div className="form-group-sign display-grid grid-2">
            <Input type="text" name={"firstname"} placeholder="Firstname" />
            <Input type="text" name={"lastname"} placeholder="Lastname" />
          </div>
          <Input type="text" name={"email"} placeholder="Your username or email" />
          <Input type="password" name={"password"} placeholder="Password" />
          <div className="form-sign-forgot display-flex flex-row justify-content-space-between align-items-center">
            <label>
              <input type="checkbox" name="rememberMe" />
              Yes, I agree with <Link to="/terms-and-conditions">Terms and Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link>
            </label>
          </div>
          <button className='btn btn-primary form-btn'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup