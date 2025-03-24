import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'
import Card from "./Card"

const PricingCards = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <Card cardType="- Basic -" btc='$100' days='- 3 Days -' pages='- 3 Pages -' features='- Featured -' responsive='- Responsive Design -' link={<Link to='/contact' className="btn">Purchase Now</Link>} />
                <Card cardType="- Premium -" btc='$200' days='- 2 Days -' pages='- 5 Pages -' features='- Featured -' responsive='- Responsive Design -' link={<Link to='/contact' className="btn">Purchase Now</Link>} />
                <Card cardType="- Business -" btc='$300' days='- 5 Days -' pages='- 8 Pages -' features='- Featured -' responsive='- Responsive Design -' link={<Link to='/contact' className="btn">Purchase Now</Link>} />
            </div>
        </div>
    )
}

export default PricingCards;