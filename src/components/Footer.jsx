// import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { AiOutlineGithub } from "react-icons/ai";

// import './FooterStyles.css';
// import React from 'react'
// import { Link } from 'react-router-dom';



// const Footer = () => {
//     return (
//         <div className='footer'>
//             <div className="footer-container">
//                 <div className="left">
//                     <div className="location">
//                         <FaHome className='home-icon' size={20} style={{ color: '#fff', marginRight: '2rem' }} />
//                         <div>
//                             <p>Parvatiya Colony, Faridabad</p>
//                             <p>Haryana</p>
//                         </div>
//                     </div>
//                     <div className="phone">
//                         <h4> <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
//                             7678115525</h4>
//                     </div>
//                     <div className="email">
//                         <h4> <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
//                             gautamsingh321gs@gmail.com</h4>
//                     </div>

//                 </div>
//                 <div className="right">
//                     <h4>About Me</h4>
//                     <p>This is me, Gautam Singh, developer of the portfolio website. I enjoy discussing new projects and design challenges.</p>
//                     <div className="social">
//                         <Link to='https://www.facebook.com/profile.php?id=100004805176185' target='_blank'><FaFacebook className='social-icon' /></Link>
//                         <Link><FaTwitter className='social-icon' /> </Link>
//                         <Link to="https://www.linkedin.com/in/gautam-singh-86865b166/" target='_blank'><FaLinkedin className='social-icon' /></Link>
//                         <Link to='https://github.com/Gautamsingh0211' target='_blank'> <AiOutlineGithub className='social-icon' /></Link>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Footer




import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineGithub } from "react-icons/ai";

import './FooterStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome className='home-icon' size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>Parvatiya Colony, Faridabad</p>
                            <p>Haryana</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            7678115525</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            gautamsingh321gs@gmail.com</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is me, Gautam Singh, developer of the portfolio website. I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <Link to='https://www.facebook.com/profile.php?id=100004805176185' target='_blank'><FaFacebook className={`social-icon ${theme}`} /></Link>
                        <Link><FaTwitter className={`social-icon ${theme}`} /> </Link>
                        <Link to="https://www.linkedin.com/in/gautam-singh-86865b166/" target='_blank'><FaLinkedin className={`social-icon ${theme}`} /></Link>
                        <Link to='https://github.com/Gautamsingh0211' target='_blank'> <AiOutlineGithub className={`social-icon ${theme}`} /></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
