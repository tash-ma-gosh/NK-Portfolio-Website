import React from 'react'
import FillerImage from '../assets/art.png'

function PageTemplate({title, purpose, goal, role, tools}) {
  return (
    <div className='page'>
      <div className='top-section'>
        <div className='overview'>
          <h1>{title}</h1>
          <p>{purpose}</p>
        </div>
        <img src={FillerImage} alt='Do not forget to include'></img>
      </div>

      <div className='middle-section'>
        <div className='middle-container'>
          <div className='middle-grid'>
            <div className='goal'>
              <h2>Goal:</h2>
              <p>{goal}</p>
            </div>
            <div className='role'>
              <h2>My Role:</h2>
              <p>{role}</p>
            </div>
            <div className='tools'>
              <h2>Tools:</h2>
              <p>{tools}</p>
            </div>
          </div>      
        </div>
      </div>
      
      <div className='process-section'>
        <h2>My Process</h2>
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>Have one to three sentences describing the goal of the product yada yada yada lorem ispsum woohoo  yada yada yada lorem ispsum woohoo</p>
        </div>
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>Have one to three sentences describing the goal of the product yada yada yada lorem ispsum woohoo  yada yada yada lorem ispsum woohoo</p>
        </div>

      </div>

      <div className='bottom-section'>

      </div>
      
        

    </div>
  )
}

export default PageTemplate