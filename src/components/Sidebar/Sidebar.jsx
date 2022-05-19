
import React from 'react'
import './Sidebar.scss'

import { FaRegMap } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthContext/AuthContext';
import { UserContext } from '../../ContextAPI/UserContext';
function Sidebar( ) {
const {user} = useContext(UserContext)
const {currentUser } = useContext(AuthContext)
let displayName;
let photoURL;

if(user){
    displayName = user.displayName
    photoURL = user.photoURL
}
if(currentUser){
  
    displayName = currentUser.displayName?.split('++')[0]
    photoURL = currentUser.photoURL
}
  
  
  return (
    <div className='sidebar'>
        <div className="profile">
            <div className="profile-img">
               <img src={photoURL} alt="Profile picture" />
            </div>
            <p className="name">{displayName}</p>
        </div>
        <div className="line"></div>
        <div className="nav">
          <NavLink to='/dashboard' >
          <div className="nav-dashboard">
             <FaRegMap/>
             Dashboard
          </div>
          </NavLink>
           <NavLink to='create' >
           <div className="nav-create">
            <FaRegPlusSquare/>
            New Project
          </div>
           </NavLink>
         
        </div>
    </div>
  )
}

export default Sidebar