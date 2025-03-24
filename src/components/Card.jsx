import React from 'react'
import "./PricingCardStyles.css"

const Card = ({ cardType, btc, days, pages, features, responsive, link }) => {
    return (
        <div className="card">
            <h3>{cardType}</h3>
            <span className="bar"></span>
            <p className="btc">{btc}</p>
            <p>{days}  </p>
            <p>{pages}  </p>
            <p>{features} </p>
            <p>{responsive}  </p>
            <p>{link}</p>
        </div> 
    )
}

export default Card
