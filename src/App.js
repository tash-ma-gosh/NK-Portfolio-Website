import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Page from './pages/Page'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  

  return (
    
    <div className="App" style={{ background: `#0A192F`}}>
      
      <Router>
        <Navbar />
        <Routes> //put different pages here
          <Route path="/" exact element={<Home/>}/>
          <Route path="/projects" exact element={<Projects/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/projects/:projectId" exact element={<Page/>}/>
          <Route path="/contact" exact element={<Footer/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
