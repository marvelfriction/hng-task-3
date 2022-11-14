import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import metabnbLogo from '../assets/metabnb-logo.png'
import metamaskLogo from '../assets/metamask-logo.png'
import openseaLogo from '../assets/opensea-logo.png'

const Home = () => {

    return (
        <div className='main'>
            <Navbar />
            <section className='section-1'>
                <div className='section-1-content'>
                    <h2>Rent a Place away from Home in the Metaverse</h2>
                </div>
                <div className="section-1-image">
                </div>
            </section>
            <Card />
            <Footer />
        </div>
    )
}

export default Home;