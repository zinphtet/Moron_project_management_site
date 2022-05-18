import React from 'react'
import './ProjectItemWrapper.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import { useContext } from 'react'
import { CollectionContext } from '../../ContextAPI/CollectionContext'
function ProjectItemWrapper() {
  const {posts} = useContext(CollectionContext)
  console.log(posts)
  if(!posts) return <div>loading...</div>
  return <div className="project-wrapper">
    {!posts.length>0 && <div>No posts found ...</div>}
      {
        posts?.map(({itemId,...others})=>{
          return <ProjectItem  key={itemId} id={itemId} {...others}/>
        })
      }
  </div>
}

export default ProjectItemWrapper