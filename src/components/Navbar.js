import React, {useState} from "react"
import Logo from '../assets/Icon.svg'
import Resume from '../assets/NatashaKarnoto_Resume.pdf'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar()  {

    const [toggle, setToggle]=useState(false);
  
    const toggleNavbar=()=>{
      setToggle(!toggle);
    }
  
    return (
      <nav className={toggle?'open':'close'}>
          <div className="leftSide">
                <img src={Logo} />
            </div>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>

            <div className="rightSide">
                <Link to="/"> Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/projects"> Projects</Link>
                <Link to="/contact"> Contact</Link>
                <Link to={Resume} download="NatashaKarnoto_Resume" 
                    target="_blank" rel="noopener noreferrer" 
                    className="resume-button"> Resume</Link>
            </div>
      </nav>
    )
  }

// function Navbar() {


//         const [openLinks, setOpenLinks] = useState(false);

//         const toggleNavbar = () => {
//             setOpenLinks(!openLinks);
//         };


//     return(
//         <div className="navbar">
//             <div className="leftSide">
//                 <img src={Logo} />
//             </div>

//             <div className="rightSide"  id={openLinks ? "open" : "close"}>
//                 <Link to="/"> Home</Link>
//                 <Link to="/about"> About</Link>
//                 <Link to="/projects"> Projects</Link>
//                 <Link to="/contact"> Contact</Link>
//                 <Link to={Resume} download="NatashaKarnoto_Resume" 
//                     target="_blank" rel="noopener noreferrer" 
//                     className="resume-button"> Resume</Link>

//                 <button onClick={toggleNavbar}>
//                     <ReorderIcon />
//                 </button>
                
//             </div>
//         </div>
//     )

// }

export default Navbar;
    
        
