import React from 'react'
import './EducationStyles.css'
import EducationData from "./EducationData.js"
import EducationItem from './EducationItem'

const Education = () => {
    return (
        <div className='educational-details'>
            <h1>Education</h1>
            <div className="edu-items">
            {EducationData.map((item, index) => (
                <EducationItem 
                    key={index}
                    course={item.course}
                    period={item.period}
                    institute={item.institute}
                    percentage={item.percentage}
                />
            ))}

                {/* <div className="edu-item">
                    <h4 className='course'>Bachelor of Technology <br /> (Computer Science & Engineering)</h4>
                    <h5 className='course-period'>2019 - 2023</h5>
                    <p className='institute'><em>University Institute of Engineering and Technology <br />
                        Maharshi Dayanand University, Rohtak, Haryana</em></p>
                    <p className='percentage'>Percentage - 77.5%</p>
                </div>
                <div className="edu-item">
                    <h4 className='course'>Senior Secondary (12th)</h4>
                    <h5 className='course-period'>2019</h5>
                    <p className='institute'><em>Kurukshetra Sr. Sec. School, Faridabad, Haryana </em></p>
                    <p className='percentage'>Percentage - 94.6%</p>
                </div>
                <div className="edu-item">
                    <h4 className='course'>Matriculation (10th)</h4>
                    <h5 className='course-period'>2017</h5>
                    <p className='institute'><em>Parmar Public School, Faridabad, Haryana </em></p>
                    <p className='percentage'>Percentage - 93.4%</p>
                </div> */}
            </div>

        </div>
    )
}

export default Education
