import React from 'react'

function ProjectItem({image, name, description}) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h1>{name}</h1>
        <p> {description}</p>

    </div>
  )
}

export default ProjectItem