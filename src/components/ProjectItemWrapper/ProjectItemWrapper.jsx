import React from 'react'
import './ProjectItemWrapper.scss'
import ProjectItem from '../ProjectItem/ProjectItem'
import { useContext } from 'react'
import { CollectionContext } from '../../ContextAPI/CollectionContext'
 import {auth} from '../../firebase/firebase'
function ProjectItemWrapper() {
  const {posts,postFilterBy} = useContext(CollectionContext)
  if(!posts) return <div>loading...</div>
 
  let filteredPosts = null;
  if(postFilterBy==='all'){
    filteredPosts = posts
  }
  if(postFilterBy==='mine'){
    filteredPosts = posts.filter((post)=>post.userId === auth.currentUser.uid)
  }
  if(postFilterBy==='others'){
    filteredPosts = posts.filter((post)=>post.category === null)
  }
  if(postFilterBy!=='mine' && postFilterBy!=='all' && postFilterBy!=='others'){
    filteredPosts= posts.filter((post)=>post.category?.value === postFilterBy)
  }
 
  return <div className="project-wrapper">
    {!posts.length>0 && <div>No posts found ...</div>}
      {
        filteredPosts?.map(({itemId,...others})=>{
          return <ProjectItem  key={itemId} id={itemId} {...others}/>
        })
      }
  </div>
}

export default ProjectItemWrapper