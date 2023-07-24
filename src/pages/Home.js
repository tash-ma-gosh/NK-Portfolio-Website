import React from 'react';
import "../styles/Home.css"
import HomePic from "../assets/NookNook.png";


function Home() {
 
  return (
    <div className='home'>
  
      <div className='headerContainer' >
        <h1>Natasha Karnoto</h1>
        <h3>UI/UX Designer&nbsp;&nbsp;|&nbsp;&nbsp;Web/Software Developer&nbsp;&nbsp;|&nbsp;&nbsp;Llama Lover </h3>  
        <img src={HomePic}></img>
      </div>
      
    </div>
  );
}

export default Home;