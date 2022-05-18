

import React from 'react'
import { Link } from 'react-router-dom'
import Image from './images.jpg'
import './ProjectItem.scss'
function ProjectItem({name,duedate,assign,id}) {
  
  return (
   <Link to={`/projects/${id}`}>
    <div className='project-item'>
        <p className="project-item-title">
           {name}
        </p>
        <span className='duedate'>Due by {duedate}</span>
        <div className="line"></div>
        <div className="assigns">
          {
            assign?.map(({value})=>{
               return  <img src={value} alt="profile image" key={value} />
            })
          }
          {!assign && <div className='no-assign'>
            
            </div>}
            {/* <img src={Image} alt="profile image" />
            <img src={Image} alt="profile image" />
            <img src={Image} alt="profile image" /> */}
        </div>
    </div>
    </Link>
  )
}

export default ProjectItem