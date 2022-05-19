import Main from "../Main/Main"
import './Container.scss'
import { useContext ,useEffect} from "react"
import { AuthContext } from "../../ContextAPI/AuthContext/AuthContext"
import Sidebar from "../../components/Sidebar/Sidebar"
import Alluser from "../../components/UsersStatus/Alluser"
import useGetCollection from "../../CustomHooks/useGetCollection"
const Container = ()=>{
    const {currentUser,authReady} = useContext(AuthContext)
     const {getCollection} = useGetCollection()
    useEffect(()=>{
        const unsub =  getCollection('posts','SET_POSTS')
        const unsubscribe =  getCollection('users','SET_USERS')
       
        return ()=>{
          unsub();
          unsubscribe();
        }
       },[])
    
    return <div className='container'>
        {(authReady ) && <>
            {(currentUser )&& <Sidebar />}
            
             <Main/>
        {(currentUser ) &&  <Alluser/>}
        </>}
        
            
    </div>
}

export default Container