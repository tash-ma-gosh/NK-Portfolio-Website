import React from 'react';
import {ProjectList} from '../helpers/projectsList'
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
        <h1 className='projectsTitle'>My Projects</h1>
        <div className='projectsList'>
            {ProjectList.map((projectItem, key) => {
                return( 
                    <ProjectItem 
                    key={key}
                        image={projectItem.image} 
                        name={projectItem.name} 
                        description={projectItem.description}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Projects