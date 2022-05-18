
import React from 'react'
import './Dashboard.scss'
import Filter from '../Filter/Filter'
import ProjectItemWrapper from '../ProjectItemWrapper/ProjectItemWrapper'
// import { useContext } from 'react'
// import { CollectionContext } from '../../ContextAPI/CollectionContext'
function Dashboard() {
 
  return (
    <div className='dashboard'>
      <p className="dashboard-title">
        Dashboard
      </p>
     <Filter/>
     <ProjectItemWrapper/>
    </div>
  )
}

export default Dashboard