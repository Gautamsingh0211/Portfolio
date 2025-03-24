import './HeroImg2Styles.css'

import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const HeroImg2 = ({ heading, text }) => {
    const { theme } = useContext(ThemeContext); 

    return (
        <div className={`hero-img ${theme}`} >
            <div className="heading">
                <h1 className={`heading-text ${theme}`}>{heading}</h1>
                <p className={`heading-text ${theme}`}>{text}</p>
            </div>
        </div >
    )
}

export default HeroImg2
