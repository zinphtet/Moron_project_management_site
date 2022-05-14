import Main from "../Main/Main"
import './Container.scss'
import { useContext } from "react"
import { AuthContext } from "../../ContextAPI/AuthContext/AuthContext"
const Container = ()=>{
    const {currentUser,authReady} = useContext(AuthContext)
    console.log(authReady)
    return <div className='container'>
        {authReady && <>
            {currentUser && <div className="dashboard">
                    Dashboard
             </div> }
            
             <Main/>
        {currentUser &&  <div className="all-users">
                All Users
             </div>}
        </>}
        
            
    </div>
}

export default Container