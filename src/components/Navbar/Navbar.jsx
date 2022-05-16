
import React from 'react'
import './Navbar.scss';
import Logo from './logo.jpg'
import Button from '../Button/Button';
import { useNavigate } from 'react-router';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthContext/AuthContext';
import useLogout from '../../CustomHooks/useLogout';
function Navbar() {
const {currentUser } = useContext(AuthContext)
const {loading , logout} = useLogout()
// console.log(currentUser)
  return (
    <div className='navbar'>
        <div className="logo">
            <figure><img src={Logo} alt="Site Logo" /></figure>
            <span className="logo-title">Moron</span>
        </div>
        <ul className="navlinks">
          {!currentUser && <>
            <NavLink to='/login' 
            style={({ isActive }) =>
            isActive ?{opacity:.7} : undefined
          }
           ><li className="navlink" >Login</li></NavLink>
           <NavLink to ='/signup' 
           style={({ isActive }) =>
           isActive ?{opacity:.7} : undefined
         }
           ><li className="navlink" >Signup</li></NavLink>
          </> }
           
         {currentUser && <Button title={`${loading? 'loading..':'logout'}`} handleClick={logout}/>}
             
        </ul>
    </div>
  )
}

export default Navbar