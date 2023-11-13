// Account Recovery Form
import React,{useContext} from 'react'
import  ModalContext  from '../../modal/modalContext/ModalContext'
import Input from '../../inputs/Input'
const Accountrecover = () => {
  // get modal context to change modal type
  const {setModalType} = useContext(ModalContext);
  return (
    <div className="forms">
      <h1>Regain Access</h1>
      <form>
        <div className="form-group">
          <Input type="text" name={"email"} placeholder="Your username or email"/>
          <Input type="password" name={"password"} placeholder="Password"/>
          <div className="form-sign-forgot display-flex flex-row justify-content-space-between align-items-center">
            {/* on click it will change modal type */}
            <button className='account-recovery' type="button" onClick={()=>setModalType("login")}>Login</button>
          </div>
          <button className='btn btn-primary form-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Accountrecover