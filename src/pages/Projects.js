import React from 'react';
import {ProjectList} from '../helpers/projectsList'
import { MenuItem } from '@mui/material';

function Projects() {
  return (
    <div className='projects'>
        <h1 className='projectsTitle'>My Projects</h1>
        <div className='projectsList'>
            {ProjectList.map((projectItem, key) => {
                return <div> {projectItem.name} </div>;
            })}
        </div>
    </div>
  )
}

export default Projects