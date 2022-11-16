import React from 'react';
import { IoIosArrowForward, IoMdClose } from 'react-icons/io'
import walletConnectIcon from '../assets/walletconnect-modal-icon.png'
import metamaskIcon from '../assets/metamask-modal-icon.png'

const Modal = (setOpenModal) => {
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div classname="modalheader">
                    <h2 className="header-text">Connect wallet</h2>
                    <button onClick={() => setOpenModal(false)}> X </button>
                </div>
                <p className="choose-wallet">Choose your preferred wallet.</p>
                <div className="metamask-connect-link">
                    <img src={metamaskIcon} className="metamask-modal-icon" alt="" />
                    <IoIosArrowForward />
                </div>
                <div className="wallet-connect-link">
                    <img src={walletConnectIcon} className="walletconnect-modal-icon" alt="" />
                    <IoIosArrowForward />
                </div>
            </div>
            ModalModal
        </div>
    )
}

export default Modal;