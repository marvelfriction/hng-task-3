import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import metabnbLogo from '../assets/metabnb-logo.png'
// import { HiOutlineViewList } from 'react-icons'

const Navbar = () => {

    return (
        <div className="navbar">
            <img src={metabnbLogo} alt="" className="metabnb-logo" />
            <ul className="links-container ">
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/placetostay">Place to stay</Link></li>
                <li className="nav-links"><Link to="#">NFTs</Link></li>
                <li className="nav-links"><Link to="#">Community</Link></li>
            </ul>
            <button className="connect-wallet">
                Connect wallet
            </button>
        </div>
    )
}

export default Navbar;