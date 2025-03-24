import './HeroImgStyles.css'
import IntroImg from '../assets/Intro-bg.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'> <img className='intro-img' src={IntroImg} />   </div>
            <div className="content">
                <p>I'M Gautam Singh</p>
                <h1>React Developer</h1>
                <div>
                    <Link to='/project' className='btn'>Project</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                    <Link to='https://drive.google.com/file/d/1h1KUgy5s8KBw6YAU7fBrSt0GRVUAlxCv/view?usp=sharing' target='_blank' className='btn'>  Resume</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg
    