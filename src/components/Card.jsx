import React from 'react'
import data from '../HomeData'

const Card = () => {

    return (
        <>
            {data.map((card) => {
                return(
                    <div className="card--meta">
                        <img src={card.image} alt="image--meta" className="image--meta" />
                        <div className="card--details">
                            <p className="card-info--duration"><span>{card.info}</span><span className="bold">{card.duration}</span></p>
                            <p className="card-dist--avail"><span>{card.distance}</span><span>{card.availability}</span></p>
                            <img src={card.starRating} alt="star-rating" className="card-star--rating" />
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Card;