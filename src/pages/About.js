import React from 'react';
import "../styles/About.css"
import Me from "../assets/nook_crop.png";


function About() {
 
  return (
    <div className='about'>
  
      <div className='introduction' >

      <div className='profile'>
            <img src={Me} alt='Natasha within front of monitor coding with a rubber duck next to her'></img>
        </div>
      
        <div className='aboutMe'>
            <h1>About Me</h1>
            <p>Hello, my name is Natasha! I am fascinated by the power of code and algorithms to shape our lives. 
                This has driven me to explore more of the possibilities in my field where I bring both my technical
                and design experience into new projects and innovations.</p>
            <p>Currently, I am a Senior at Drexel University in the Custom Design Major  which combines Computer Science,
                User Experience and Design, and Humanities. I intend to create digital products with the full stories of my users in mind.</p>
        </div>
        
       
      </div>
      
    </div>
  );
}

export default About;