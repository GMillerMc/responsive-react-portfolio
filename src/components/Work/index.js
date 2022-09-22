import React from 'react'

// import "./index.css"

import WorkCard from '../WorkCard'
import workCardData from './Data/workCardData'

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">TEXT</h1>
            <div className="project-container">
                {workCardData.map((val, ind) => {
                    return(
                        <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        technologies={val.technologies}
                        view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
