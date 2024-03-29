import React,{useContext} from 'react'
import ModalContext from '../../modal/modalContext/ModalContext'
import Input from '../../inputs/Input'
const Login = () => {
  const {setModalType} = useContext(ModalContext);
  return (
    <div className="forms">
      <h1>Login</h1>
      <p>Don't have an account yet? <span style={{"cursor":"pointer"}} onClick={()=>{setModalType("signup")}}>Sign up</span> for free</p>
      <form>
        <div className="form-group">
          <Input type="text" name={"email"} placeholder="Your username or email"/>
          <Input type="password" name={"password"} placeholder="Password"/>
          <div className="form-sign-forgot display-flex flex-row justify-content-space-between align-items-center">
            <label>
              <input type="checkbox" name="rememberMe"/>
              Stay signed in
            </label>
            <button className='account-recovery' type="button" onClick={()=>setModalType("accountrecover")}>Forgot password?</button>
          </div>
          <button className='btn btn-primary form-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login