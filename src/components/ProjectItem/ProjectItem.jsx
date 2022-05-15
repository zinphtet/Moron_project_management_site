

import React from 'react'
import Image from './images.jpg'
import './ProjectItem.scss'
function ProjectItem() {
  return (
    <div className='project-item'>
        <p className="project-item-title">
            Portfolio site using html css and js
        </p>
        <span className='duedate'>Due by May 20 2022</span>
        <div className="line"></div>
        <div className="assigns">
            <img src={Image} alt="profile image" />
            <img src={Image} alt="profile image" />
            <img src={Image} alt="profile image" />
        </div>
    </div>
  )
}

export default ProjectItem