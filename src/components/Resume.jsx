import React from 'react'
import "./ResumeStyles.css"
import Education from './Resume Components/Education'
import Experience from './Resume Components/Experience'

const Resume = () => {
    return (
        <div className='resume'>
            <div className="section-title">
                <h1>Resume</h1>
            </div>
            <div className="row">
                <div className="col"> <Education /></div>
                <div className="col"> <Experience /></div>
            </div>
        </div>
    )
}

export default Resume
