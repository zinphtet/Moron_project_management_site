
import React from 'react'
import './Dashboard.scss'
import Filter from '../Filter/Filter'
import ProjectItemWrapper from '../ProjectItemWrapper/ProjectItemWrapper'
function Dashboard() {
  return (
    <div className='dashboard'>
      <p className="dashboard-title">
        Dashboard
      </p>
     {/* <Filter/> */}
     <ProjectItemWrapper/>
    </div>
  )
}

export default Dashboard