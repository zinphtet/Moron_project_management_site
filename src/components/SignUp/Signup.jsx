import React from 'react'
import './Signup.scss';
import Input from '../Input/Input'
import Button from '../Button/Button';
import { useState ,useContext} from 'react';
import { toast } from 'react-toastify';
import useSignup from '../../CustomHooks/useSignup';
import useAddDoc from '../../CustomHooks/useAddDoc';
import useAddImg from '../../CustomHooks/useAddImg';
import {  updateProfile } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../ContextAPI/AuthContext/AuthContext';

function Signup() {
 const {loading , signup} = useSignup()
 const {addDocument}=  useAddDoc()
 const {addImg} = useAddImg()
 const {dispatch} = useContext(AuthContext)
// console.log('signup img' ,img)
  const [formData,setFormData] = useState({
        email:'',
        password:'',
        displayName:'',
  })
  const [file , setFile] = useState('')
  const {email,password,displayName} = formData

  const handleInput =(e)=>{
    // console.log(e.target.files)
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
  // dispatch({type:'AUTH_READY'})
  if(!file || file[0].size >100000){
    toast.error('Something went wrong !' , {autoClose:2000})
    return;
  }
  if(file){
    // console.log(email,password,displayName,file[0])
   const id =await addDocument('users',{
      email,
      password,
      displayName,
    })
    // console.log(id , 'docuemtn Ref ID')
    // console.log('doc id',id)
    console.log("STARTING SIGNUP USER")
     await signup(email,password)
    // console.log(user , 'SIGN UP USER')
    await addImg(email,file[0],id,displayName)
    // await updateProfile(auth.currentUser, {
    //   displayName: displayName,
    // })
   console.log("FINISHED SIGNUP USER")
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