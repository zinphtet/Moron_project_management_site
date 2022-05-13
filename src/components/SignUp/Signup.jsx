import React from 'react'
import './Signup.scss';
import Input from '../Input/Input'
import Button from '../Button/Button';
function Signup() {
  return (
    <form  className="signup-form">
         <p className="signup-title">Signup Account</p>
         <Input id='signup-email' type='email' label='email' />
         <Input id='signup-password' type='password' label='password' />
         <Input id='signup-display-name'  label='displayName' />
         <Input id='signup-file' type='file' label='profile thumbnail' />
         <Button title='signup'/>
    </form>
  )
}

export default Signup