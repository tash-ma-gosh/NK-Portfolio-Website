import React from 'react'

function ProjectItem({image, name, skills}) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h1>{name}</h1>
        {/* <p> {skills}</p> */}
        <div className='skillTags'>
          {skills.map((skill, index) => (
            <span key={index} className='skill'>
              {skill}
            </span>
          ))}
          
        </div>
        

    </div>
  )
}

export default ProjectItem