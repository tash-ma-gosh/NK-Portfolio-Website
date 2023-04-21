import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes> //put different pages here
          <Route path="/" exact component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
