import React from 'react'
import './footer.css'
import metabnbFooter from '../assets/metabnb-footer-logo.png'
import facebookIcon from '../assets/facebook-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-logos--container">
                <img src={metabnbFooter} className="metabnb-footer" alt="metabnb-footer" />
                <div className="footer-socials">
                    <img src={facebookIcon} className="facebook-icon" alt="facebook-icon" />
                    <img src={instagramIcon} className="instagram-icon" alt="instagram-icon" />
                    <img src={twitterIcon} className="twitter-icon" alt="twitter-icon" />
                </div>
                <small>&copy; 2022 Metabnb</small>
            </div>
            <ul className="community">
                <li>Community</li>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </ul>
            <ul className="places">
                <li>Places</li>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
            </ul>
            <ul className="about-us">
                <li>About us</li>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Footer;