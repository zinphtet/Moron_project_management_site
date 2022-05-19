import React from 'react'
import './Signup.scss';
import Input from '../Input/Input'
import Button from '../Button/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSignup from '../../CustomHooks/useSignup';
import useAddDoc from '../../CustomHooks/useAddDoc';
import useAddImg from '../../CustomHooks/useAddImg';


function Signup() {
 const {loading , signup} = useSignup()
 const {addDocument}=  useAddDoc()
 const {addImg} = useAddImg()
 

  const [formData,setFormData] = useState({
        email:'',
        password:'',
        displayName:'',
  })
  const [file , setFile] = useState('')
  const {email,password,displayName} = formData

  const handleInput =(e)=>{
    
    setFormData((prev)=>{
      return {
        ...prev,
        [e.target.id] :e.target.value,
      }
    })
   
  }
const handleFile = (e)=>{
  if(!e.target.files[0].type.includes('image')|| e.target.files[0].size >100000){
          toast.warn('Please Select Image file less than 100kb',{autoClose:1000})
          return;
  }else{
    setFile(e.target.files)
  }
}

const handleSubmit = async (e)=>{
  e.preventDefault();
  
  if(!file || file[0].size >100000){
    toast.error('Something went wrong !' , {autoClose:2000})
    return;
  }
  if(file){
   
   const id =await addDocument('users',{
      email,
      password,
      displayName,
    })
    
   
     await signup(email,password)
    
    await addImg(email,file[0],id,displayName)
   
   
  }
}

  return (
    <form  className="signup-form"onSubmit={handleSubmit}>
         <p className="signup-title">Signup Account</p>
         <Input id='email' type='email' label='email' value={email} handleInput={handleInput}/>
         <Input id='password' type='password' label='password' value={password} handleInput={handleInput}/>
         <Input id='displayName' type='text'  label='displayName' value={displayName} handleInput={handleInput}/>
         <Input id='file' type='file' label='profile thumbnail'  handleInput={handleFile}/>
         <Button title={`${loading?'loading...':'signup'}`}/>
    </form>
  )
}

export default Signup