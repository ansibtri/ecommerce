import React, { useRef } from 'react'
import ReactDom from 'react-dom'
import './modal.css'
import Form from '../forms/Form'
import { useContext } from 'react'
import  ModalContext from './modalContext/ModalContext'
const Modal = ({children}) => {
    const {showModal,setShowModal} = useContext(ModalContext);
    return ReactDom.createPortal(
    <>
        <div className={showModal === true ? "modal active": "modal"}>
            <div className="modal-body">
                <span className='close' onClick={()=>{setShowModal(!showModal)}}><i class="fa-solid fa-xmark"></i></span>
                {children}
            </div>
            <div className="modal-bg-layer" onClick={()=>{setShowModal(!showModal)}}></div>
        </div>
    </>,
    document.getElementById('portal')
    )
}
export default Modal