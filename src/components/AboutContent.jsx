import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Im a react front-end developer. I'm always open to new projects and ideas that can have an impact.</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
