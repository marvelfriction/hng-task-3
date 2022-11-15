import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import mbtokenLogo from '../assets/mbtoken-logo.png'
import metamaskLogo from '../assets/metamask-logo.png'
import openseaLogo from '../assets/opensea-logo.png'
import imageGroupTop from '../assets/image-group-top.png'

const Home = () => {

    return (
        <div className='main'>
            <Navbar />
            <section className='section-1'>
                <div className='section-1-content'>
                    <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
                    <p> We provide you access to luxury and affordable houses
                     in the metaverse, get a chance to turn your imagination 
                     to reality at your comfort zone</p>
                     <div className="search-container">
                        <input type="text" className="search-location" />
                        <button className="search-btn" placeholder="search for location">Search</button>
                     </div>
                </div>
                <img src={imageGroupTop} alt="" className="image-group-1" />
            </section>
            <div className="official-logos">
                <img src={mbtokenLogo} alt="mbtoken-logo" className="mbtoken-logo" />
                <img src={metamaskLogo} alt="metamask-logo" className="metamask-logo" />
                <img src={openseaLogo} alt="opensea-logo" className="opensea-logo" />
            </div>
            <section className="section-2">
                <h2>Inspiration for your next adventure</h2>
                <div className="card-container">
                    <Card />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;