import React from 'react';
import {ProjectList} from '../helpers/projectsList'
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
        <h1 className='projectsTitle'>My Work</h1>
        <div className='projectsList'>
            {ProjectList.map((projectItem, key) => {
                return( 
                    <a href={projectItem.href} target='_blank'><ProjectItem 
                    key={key}
                        image={projectItem.image} 
                        name={projectItem.name} 
                        skills={projectItem.skills}
                    /></a>
                );
            })}
        </div>
    </div>
  )
}

export default Projects