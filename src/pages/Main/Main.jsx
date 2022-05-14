
import React from 'react'
import './Main.scss'
import Navbar from '../../components/Navbar/Navbar';
import Login from '../../components/Login/Login';
import Signup from '../../components/SignUp/Signup';
import { Routes,Route,Navigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthContext/AuthContext';
function Main() {
  const {currentUser,authReady} = useContext(AuthContext)
  console.log(currentUser)
  console.log('AuthState' , authReady)
  return (
    <div className='main'>
      <Navbar/>
      {/* <Login/> */}
      <div className='main-div'>
         <Routes>
            <Route path='/'  element={!currentUser ? <Navigate replace to='/login'/> : <div>HELLO</div>}/>
           <Route path='/login'  element={!currentUser ? <Login/> :<Navigate replace to='/'/> }/>
           <Route path='/signup'  element={!currentUser ? <Signup/> :<Navigate replace to='/'/>}/>
         </Routes>
      </div>
     
    </div>
  )
}

export default Main;