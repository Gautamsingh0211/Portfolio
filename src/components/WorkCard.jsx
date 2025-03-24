import "./WorkCardStyles.css"
import Project1 from "../assets/Project1.png"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = ({ imgSrc, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt="" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p> 
        <div className="pro-btn">
          {/* <NavLink to={view} className="btn" target="_blank"> View </NavLink> */}
          <NavLink to={source} className="btn" target="_blank"> Source </NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;
