
import React from 'react'
import './ViewPost.scss'
import { useParams} from 'react-router'
import useGetDoc from '../../CustomHooks/useGetDoc'
import { useState , useEffect } from 'react'
import Button from '../../components/Button/Button'
import useUpdateDoc from '../../CustomHooks/useUpdateDoc'
import { auth } from '../../firebase/firebase'
import formatDistanceToNow from 'date-fns/formatDistanceToNow/index.js'
import toDate from 'date-fns/esm/fp/toDate/index.js'
function ViewPost() {
    
    const {postId} = useParams()
    const {getSingleDocument,data} = useGetDoc()
    const [complete , setComplete] = useState(false)
    const [comment ,setComment  ] = useState('')
    const {updateDocument} = useUpdateDoc()

    const handleComplete = ()=>{
        setComplete(true)
        
    }
    
    useEffect(()=>{
        
      getSingleDocument('posts',postId)
        
    },[])
    

if(!data) return <div>Loading...</div>

const {name,author,duedate,detail,assign} = data;


const handleComment = (e)=>{
    
    setComment(e.target.value)
   
}
const handleSubmitComment =async (e)=>{
    e.preventDefault();
    
    const updateObj = {
        createdAt : new Date(),
        name : auth.currentUser.displayName.split('++')[0],
        imgUrl : auth.currentUser.photoURL,
        comment : comment,
        userId : auth.currentUser.uid
    }

    await updateDocument('posts',postId,{
        comments :[JSON.stringify(updateObj),...data.comments]
    })
    setComment('')
}
  return (
      <div className="viewpost-wrapper">
            <div className='viewpost'>
        <p className="title">{name}</p>
         <p className='author'>by {author}</p>
         <p className="duedate">Project due by {duedate}</p>
          <div className="text">
           {detail}
          </div>
          <div className="assignto">
              <p className="assign">Project is assigned to : </p>
              {!assign && <div className='not-assign'>Not Assigned</div>}
              {
                  assign?.map(({value})=>{
                      return  <img src={value} alt="profile picture" key={value} />
                  })
              }
              
          </div>
          <div className="button">
          <button onClick={handleComplete}>{`${complete?'COMPLETED':'Mark as complete'}`}</button>
          </div>
         
            </div>
            <div className="comment">
               <form onSubmit={handleSubmitComment}>
                   <div className="add-comment">
                       <p className="label">Add Comment</p>
                       <textarea required  id="comment" cols="30" rows="10" value={comment} onChange={handleComment}></textarea>
                       <Button type='submit' title='Add Comment'/>
                   </div>
               </form>
               <div className="comment-display">
                   <p className="title">Project Comments</p>
                    
                 
                    {
                        data.comments === 0 ?  <div>No Comments found</div>:
                        data.comments.map((strObj)=>{
                            const {name,createdAt,imgUrl,comment} = JSON.parse(strObj)
                           
                          console.log(toDate(new Date(createdAt)))
                          
                            return <div className="comment-item" key={createdAt}>
                                        <div className="comment-profile">
                                            <img src={imgUrl} alt="profile pic" />
                                            <p className="commenter-name">{name}</p>
                                        </div>
                                    <p className="comment-date">{formatDistanceToNow (toDate(new Date(createdAt)),{addSuffix:true})}</p>
                                        <p className="comment-text">
                                          {comment}
                                        </p>
                                     </div>
                        })
                    }
                    
               </div>
            </div>
      </div>
  
  )
}

export default ViewPost