
import React from 'react'
import './Login.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
function Login() {
  return (
   <form className='form'>
       <p className="login-title">Login Account</p>
       <Input id='login_email' label='email'/>
       <Input id='login_pass' label='email' type='password'/>
       <Button title='login'/>
   </form>
  )
}

export default Login