import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App" style={{ background: `linear-gradient(114deg, rgba(109,74,196,1) 0%, rgba(190,166,196,1) 38%, rgba(126,180,244,1) 100%)`}}>
      
      <Router>
        <Navbar />
        <Routes> //put different pages here
          <Route path="/" exact element={<Home/>}/>
          <Route path="/projects" exact element={<Projects/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
