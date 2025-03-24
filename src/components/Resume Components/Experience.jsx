import React from 'react'
import './ExperienceStyles.css'
import ExperienceData from "./ExperienceData";
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    return (
        <div className='experience-details'>
            <h1>Experience</h1>

            <div className="exp-items">
                {ExperienceData.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        role={exp.role}
                        period={exp.period}
                        organization={exp.organization}
                        responsibilities={exp.responsibilities}
                    />
                ))}
            </div>
        </div>

    )
}

export default Experience;
