import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../../inputs/Input'
const Login = () => {
  return (
    <div className="forms">
      <h1>Login</h1>
      <p>Don't have an account yet? <span>Sign up</span> for free</p>
      <form>
        <div className="form-group">
          <Input type="text" name={"email"} placeholder="Your username or email"/>
          <Input type="password" name={"password"} placeholder="Password"/>
          <div className="form-sign-forgot display-flex flex-row justify-content-space-between align-items-center">
            <label>
              <input type="checkbox" name="rememberMe"/>
              Stay signed in
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button className='btn btn-primary form-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login