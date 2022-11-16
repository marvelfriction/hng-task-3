import React, { useState } from 'react'
import data from '../Data-2'
import Card1 from '../components/Card1'


const PlaceToStay = () => {
    const [cards, setCards] = useState(data);

    return (
        
        <div className="cards-container">
            {
                cards.map((card) => {
                    return <Card1 key={card.id} {...card} />
                })
            }
        </div>

    )
}

export default PlaceToStay;