// Modal Provider for Modal Context
import React, { useState } from 'react'

import ModalContext from "./ModalContext";


const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false); // show modal when clicked on account button 
    const [modalType, setModalType] = useState('login'); // set modal type [login, register, forgot password]

    return (
        <ModalContext.Provider value={{showModal,setShowModal,modalType,setModalType}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider