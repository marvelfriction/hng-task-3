import React, { useState } from 'react'
import data from '../Data-2'
import Card1 from '../components/Card1'
import settingIcon from '../assets/setting-icon.png'


const PlaceToStay = () => {
    const [cards] = useState(data);

    return (
        <>
    <div className="place-to-stay">
        <div className="meta--nav">

            <button className="location-btn">
                Location
                <img src={settingIcon} className="setting-icon" alt="setting-icon" />
            </button>
        </div>

        <div className="cards-container">
            {
                cards.map((card) => {
                    return <Card1 key={card.id} {...card} />
                })
            }
        </div>
    </div>
        </>
    )
}

export default PlaceToStay;