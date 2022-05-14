
import React from 'react'
import './Login.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useState } from 'react'
import useLogin from '../../CustomHooks/useLogin'
function Login() {
  const [email,setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {loading , loginUser} = useLogin()
  const handleEmail = (e)=>{
    // console.log(e.target.value)
       setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    // console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    loginUser(email,password);
  }
  return (
   <form className='form' onSubmit={handleSubmit}>
       <p className="login-title">Login Account</p>
       <Input id='login_email' label='email' type='email' value={email} handleInput={handleEmail}/>
       <Input id='login_pass' label='password' type='password' value={password} handleInput={handlePassword}/>
       {loading? <Button title='loading..'/>:<Button title='login'/> }
       
   </form>
  )
}

export default Login