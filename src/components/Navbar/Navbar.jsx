
import React from 'react'
import './Navbar.scss';
import Logo from './logo.jpg'
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { NavLink } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className="logo">
            <figure><img src={Logo} alt="Site Logo" /></figure>
            <span className="logo-title">Moron</span>
        </div>
        <ul className="navlinks">
           <NavLink to='/login'><li className="navlink" ><a href="">Login</a></li></NavLink>
           <NavLink to ='/signup'><li className="navlink" ><a href="">Signup</a></li></NavLink>
           
             <Button title='logout'/>
        </ul>
    </div>
  )
}

export default Navbar