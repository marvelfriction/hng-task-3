import React from 'react'

const Card1 = ({image, info, duration, distance, availability, starRating}) => {

    return (
        <div className="card--meta">
            <img src={image} alt="meta" className="image--meta" />
                <div className="card--details">
                    <p className="card-info--duration"><span>{info}</span><span className="bold">{duration}</span></p>
                    <p className="card-dist--avail"><span>{distance}</span><span>{availability}</span></p>
                    <img src={starRating} alt="star-rating" className="card-star--rating" />
                </div>
        </div>
    )
}

export default Card1;