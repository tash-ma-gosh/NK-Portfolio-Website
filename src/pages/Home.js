import React from 'react';
import "../styles/Home.css"
import HomePic from "../assets/NookNook.png";


function Home() {
 
  return (
    <div className='home'>
  
      <div className='headerContainer' >
        <div className='nameTitle'>
          <h1>Natasha Karnoto</h1>
          <h3>Interactive Developer&nbsp;&nbsp;|&nbsp;&nbsp;UI/UX Designer&nbsp;&nbsp;|&nbsp;&nbsp;Llama Lover </h3>  
        </div>
        <img src={HomePic} alt='Natasha with headphones in front of monitor coding 
        with rubber ducks all over and Herbert the Llama next to boba on her desk'></img>
      </div>
      
    </div>
  );
}

export default Home;