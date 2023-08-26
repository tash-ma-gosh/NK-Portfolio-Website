import React from 'react'
import FillerImage from '../assets/art.png'

function PageTemplate({title, purpose,image, goal, role, tools, process, link}) {
  const isThereLink = !link || link.trim() === "";
  
  return (
    <div className='page'>
      <div className='top-section'>
        <div className='overview'>
          <h1>{title}</h1>
          <p>{purpose}</p>
        </div>
        <img src={image} alt='Do not forget to include'></img>
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

        
          {process.map((proc, index) => (
            <div key={index} className='indv-item'>

              <h3>{proc.title}</h3>
              
              <div className='image-row'>
                {proc.procImage.map((img, ind) => (
                  <img key={ind} className='processImages' src={img}>
                  </img>
                ))}
              </div>
              
              <p>{proc.paragraph}</p>
            </div>
            
            
          ))}


      </div>

      <div className='bottom-section'>

        {!isThereLink && (
          <div className='linkButton'>
            <p>Check It Out!</p>
          </div>
        )

        }
        

      </div>
      
        

    </div>
  )
}

export default PageTemplate