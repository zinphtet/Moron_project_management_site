
import React from 'react'
import './Main.scss'
import Navbar from '../../components/Navbar/Navbar';
import Login from '../../components/Login/Login';
import Signup from '../../components/SignUp/Signup';
import { Routes,Route,Navigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../ContextAPI/AuthContext/AuthContext';
import Dashboard from '../../components/Dashboard/Dashboard';
import Create from '../../components/Create/Create';
function Main() {
  const {currentUser,authReady} = useContext(AuthContext)
 
  return (
    <div className='main'>
      <Navbar/>
      {/* <Login/> */}
      <div className='main-div'>
        {!currentUser && <>
          <Routes>
            

           <Route path='/'  element={ <Navigate replace to='/login'/> }/>
           <Route path='/login'  element={ <Login/> }/>
           <Route path='/signup'  element={ <Signup/> }/>
         </Routes>
        </>}
         {
           currentUser && <>
           <Routes>
               <Route path='/'  element={ <Navigate replace to='/dashboard'/> }/>
               <Route path='/dashboard'  element={ <Dashboard/> }/>
               <Route path='/create'  element={ <Create/> }/>
           </Routes>
           </>
         }
      </div>
     
    </div>
  )
}

export default Main;