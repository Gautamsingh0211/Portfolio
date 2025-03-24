import React from 'react'

const EducationItem = ({course, period, institute, percentage}) => {
    return ( 
        <div className="edu-item">
            <h4 className='course'>{course}</h4>
            <h5 className='course-period'>{period}</h5>
            <p className='institute'><em>{institute}</em></p>
            <p className='percentage'>Percentage - {percentage}%</p> 
        </div>
    )
}

export default EducationItem
