

import React from 'react'
import './Alluser.scss'
import { useContext } from 'react'
import { CollectionContext } from '../../ContextAPI/CollectionContext'
// import { uuid } from 'uuidv4';
function Alluser() {
 const {users} = useContext(CollectionContext)

 if(!users)  return <div>Loading ... </div>
  return (
    <div className='all-users'>
        <p className="title">
            All Users
        </p>
        
        <div className="users">

        {
            users.map(({displayName,imgUrl,online})=>{
                return <div className="user" key={imgUrl}>
                             { online && <div className="green-status"></div>}
                               <p className='name'>{displayName}</p>
                               <img src={imgUrl} alt="profile img" />
                        </div>
            })
        }

            {/* <div className="user">
                <div className="green-status"></div>
                <p className='name'>zinphtet</p>
                <img src={img} alt="profile img" />
            </div>
            <div className="user">
                <div className="green-status"></div>
                <p className='name'>zinphtet</p>
                <img src={img} alt="profile img" />
            </div>
            <div className="user">
                <div className="green-status"></div>
                <p className='name'>zinphtet</p>
                <img src={img} alt="profile img" />
            </div> */}
        </div>
    </div>
  )
}

export default Alluser