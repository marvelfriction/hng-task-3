import React from 'react'
import metabnbLogo from '../assets/metabnb-logo.png'
import metamaskLogo from '../assets/metamask-logo.png'
import openseaLogo from '../assets/opensea-logo.png'

const Navbar = () => {

    return (
        <div className="navbar">
            <img src={metabnbLogo} alt="" className="metabnb-logo" />
            <ul className="links-container ">
                <li className="nav-links"><a href="#">Home</a></li>
                <li className="nav-links"><a href="#">Place to stay</a></li>
                <li className="nav-links"><a href="#">NFTs</a></li>
                <li className="nav-links"><a href="#">NFTs</a></li>
            </ul>
            <button className="connect-wallet">
                Connect wallet 
            </button>
        </div>
    )
}

export default Navbar;