import React from 'react'
import { NavLink } from 'react-router-dom'

import "./index.css"

const WorkCard = (props) => {
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="smallTalk Logo" />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <p>{props.technologies}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view}className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
        </div>
    )
}

export default WorkCard
