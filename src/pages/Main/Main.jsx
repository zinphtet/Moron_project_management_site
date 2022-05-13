
import React from 'react'
import './Main.scss'
import Navbar from '../../components/Navbar/Navbar';
import Input from '../../components/Input/Input';
import Login from '../../components/Login/Login';
import Signup from '../../components/SignUp/Signup';
import { Routes,Route } from 'react-router';
function Main() {
  return (
    <div className='main'>
      <Navbar/>
      {/* <Login/> */}
      <div className='main-div'>
         <Routes>
            <Route path='/'  element={<Login/>}/>
           <Route path='/login'  element={<Login/>}/>
           <Route path='/signup'  element={<Signup/>}/>
         </Routes>
      </div>
     
    </div>
  )
}

export default Main;