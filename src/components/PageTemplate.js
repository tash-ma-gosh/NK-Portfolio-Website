import React from 'react'
import FillerImage from '../assets/art.png'

function PageTemplate({content}) {
  return (
    <div className='page'>
      <div className='top-section'>
        <div className='overview'>
          <h1>Title of Project</h1>
          <p>Have one to three sentences describing the 
            product and its purpose.</p>
        </div>
        <img src={FillerImage} alt='Do not forget to include'></img>
      </div>

      <div className='middle-section'>
        <div className='middle-container'>
          <div className='middle-grid'>
            <div className='goal'>
              <h2>Goal:</h2>
              <p>Have one to three sentences describing the goal of the product yada yada yada lorem ispsum woohoo  yada yada yada lorem ispsum woohoo</p>
            </div>
            <div className='role'>
              <h2>My Role:</h2>
              <p>Software Developer, UI UX, Juggling</p>
            </div>
            <div className='tools'>
              <h2>Tools:</h2>
              <p>Laptop, Pure Skill, and Maple Syrup</p>
            </div>
          </div>      
        </div>
      </div>
      
      <div className='bottom-section'>
        <h2>More Context</h2>
        {/* Do a similar method to projects overview pageS */}
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>A five word blurb description</p>
        </div>
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>A five word blurb description</p>
        </div>
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>A five word blurb description</p>
        </div>
        <div className='indv-item'>
          <img src={FillerImage} alt='Do not forget to include'></img>
          <p>A five word blurb description</p>
        </div>

      </div>
      
        <p>{content}</p>

    </div>
  )
}

export default PageTemplate