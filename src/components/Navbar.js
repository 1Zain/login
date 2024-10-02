import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to = "/home">Home</Link>
            </li>
            <li>
            <Link to = "/about">About</Link>
            </li>

             <li>
            <Link to = "/calculator">Calculator</Link>

            </li> 
           
        </ul>
    </nav>
  )
}

export default Navbar