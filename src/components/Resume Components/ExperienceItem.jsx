import React from 'react'

const ExperienceItem = ({ role, period, organization, responsibilities }) => {
    return (
        <div className="exp-item">
            <h4 className='role'>{role}</h4>
            <h5 className='period'>{period}</h5>
            <p className='organization'><em>Organization - {organization} </em></p>
            <div className="role-summary">
                <ul>
                    {responsibilities.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

export default ExperienceItem
