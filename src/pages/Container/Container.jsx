import Main from "../Main/Main"
import './Container.scss'
import { useContext } from "react"
import { AuthContext } from "../../ContextAPI/AuthContext/AuthContext"
import Sidebar from "../../components/Sidebar/Sidebar"
const Container = ()=>{
    const {currentUser,authReady} = useContext(AuthContext)
    const displayName = currentUser?.displayName
    const photoURL = currentUser?.photoURL
    
    return <div className='container'>
        {(authReady ) && <>
            {(currentUser )&& <Sidebar />}
            
             <Main/>
        {(currentUser ) &&  <div className="all-users">
                All Users
             </div>}
        </>}
        
            
    </div>
}

export default Container