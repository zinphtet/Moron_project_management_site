
import React from 'react'
import './Filter.scss'
import { useContext } from 'react'
import { CollectionContext } from '../../ContextAPI/CollectionContext'
import { useState } from 'react'
function Filter() {
  const {dispatch,postFilterBy} = useContext(CollectionContext)
  const filterList = ['all','mine','frontend','backend','fullstack','figma','others']
   const [filterBy,setFilterBy] = useState(postFilterBy)
  const handleFilter = (f)=>{
    
     
      dispatch({type:'SET_FILTER',payload:f})
      setFilterBy(f)
       console.log(f ,'FILTER COMPONENT')
  }
    return (
    <div className='filter'>
      
        Filter by : 
        
        {
           filterList.map((f)=>
             ( <button type='button' key={f}  onClick={()=>handleFilter(f)} className={filterBy===f?'active':''}>{f}</button>)
           )
         }
       
         
    </div>
  )
}

export default Filter