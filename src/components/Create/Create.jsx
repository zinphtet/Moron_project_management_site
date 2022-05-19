import React from 'react'
import './Create.scss'
import Input from '../Input/Input'
import Select from 'react-select'
import Button from '../Button/Button'
import { useState,useContext} from 'react'
import { CollectionContext } from '../../ContextAPI/CollectionContext'
import useAddDoc from '../../CustomHooks/useAddDoc'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router'
function Create() {
  const navigate = useNavigate()
  const [projectName ,setProjectName] = useState('')
  const [projectDetail ,setProjectDetail] = useState('')
  const [dueDate , setDueDate ] = useState(new Date())
  const [category , setCategory] = useState(null)
  const [assignTo , setAssignTo] = useState(null)
  
  const {users} = useContext(CollectionContext)
  const {addDocument,loading} = useAddDoc()
  const handleProjectName = (e)=>{
    setProjectName(e.target.value)
  }
  const handleProjectDetail = (e)=>{
    setProjectDetail(e.target.value)
  }
  const handleDueDate = (e)=>{
    setDueDate(e.target.value)
  }
  const handleCategory = (select)=>{
    console.log("CATEGORY")
    
    setCategory(select)
    
  }
 const handleAssignTo = (select)=>{
  console.log("ASSIGN TO")

  setAssignTo(select)
 }
const handleSubmit = async (e)=>{
  
  e.preventDefault();
  
   const obj = {
     name : projectName,
     detail : projectDetail,
     duedate : dueDate,
     category : category,
     assign : assignTo,
     userId : auth.currentUser.uid,
     comments : [],
     author:auth.currentUser.displayName.split('++')[0]
   }
 const id =  await  addDocument('posts' , obj)
  navigate(`/projects/${id}`)
}
  

 

if(!users) return <div>Loading.....</div>
const optionCategory = [
  { value: 'frontend', label: 'Web Frontend' },
  { value: 'backend', label: 'Web Backend' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'figma', label: 'Figma Design' }
]

const assignUsers = users.map((user)=>{
  return{
    value:user.imgUrl,
    label:user.displayName
  }
})
 console.log(assignUsers,"ASSIGN USERS")
  return (
    <div className='create'>
      <p className="create-title">
       Create Project
      </p>
      <div className="form-div">
         <form onSubmit={handleSubmit}>
            <Input type='text' label="project name" id='project-name' handleInput={handleProjectName}/>
            <div className="textarea">
              <label htmlFor="txt-area">Project details:</label>
              <textarea  id="txt-area" cols="30" rows="10" onChange={handleProjectDetail}></textarea>
            </div>
            <Input type='date' label="set due date" id='set-due-date' handleInput={handleDueDate}/>
            <div className="select-cat">
              <label >category:</label>
            <Select options={optionCategory}  isClearable onChange={handleCategory}/>
            </div>
            <div className="assignto">
            <label >assign to:</label>
            <Select options={assignUsers}  isClearable isMulti onChange={handleAssignTo}/>
            </div>
            <Button title={`${loading?'loading...':'Add Project'}`}/>
         </form>
      </div>
    </div>
  )
}

export default Create