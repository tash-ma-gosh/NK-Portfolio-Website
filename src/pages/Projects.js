import React from 'react';
import {ProjectList} from '../helpers/projectsList'
import ProjectItem from '../components/ProjectItem';
import {Link} from 'react-router-dom';

import '../styles/Projects.css'
import Page from '../pages/Page'
// import { Switch } from '@mui/material';

function Projects() {
  return (
    
    <div className='projects'>
        
        {/* <h1 className='projectsTitle'>My Work</h1> */}
        <div className='projectsList'>
            {ProjectList.map((projectItem, key) => {
                return( 
                    
                    <Link to={`/projects/${projectItem.id}`} target='_blank'><ProjectItem 
                    key={key}
                        image={projectItem.image} 
                        name={projectItem.name} 
                        skills={projectItem.skills}
                    /></Link>
                );
            })}
        </div>
    </div>

            

  )
}

export default Projects