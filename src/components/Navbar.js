import React, {useState} from "react"
import Logo from '../assets/Icon.svg'
import Resume from '../assets/NatashaKarnoto_Resume.pdf'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../styles/Navbar.css'

function Navbar()  {

    const [toggle, setToggle]=useState(false);
  
    const toggleNavbar=()=>{
      setToggle(!toggle);
    }

    const closeNavbar = () => {
      setToggle(false);
    };

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }

    const scrollToBottomAndClose = () => {
      scrollToBottom();
      closeNavbar();
    };

    <div className="closeButton">
        <button onClick={toggleNavbar}>
          <CloseOutlinedIcon />
        </button>
      </div>
  
    return (
      <nav className={toggle?'open':'close'}>
          <div className="leftSide">
                <img src={Logo} />
            </div>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>

            <div className="closeButton">
              <button onClick={toggleNavbar}>
                <CloseOutlinedIcon />
              </button>
            </div>

            <div className="rightSide">
                <Link to="/" onClick={closeNavbar}> Home</Link>
                <Link to="/about" onClick={closeNavbar}> About</Link>
                <Link to="/projects" onClick={closeNavbar}> Projects</Link>
                <Link onClick={scrollToBottomAndClose}> Contact</Link>
                <Link to={Resume} onClick={closeNavbar} download="NatashaKarnoto_Resume" 
                    target="_blank" rel="noopener noreferrer" 
                    className="resume-button"> Resume</Link>
            </div>
      </nav>
    )
  }

export default Navbar;
    
        
