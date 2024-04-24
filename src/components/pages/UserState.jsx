import React,{useEffect , useState} from 'react'
import { onAuthStateChanged , signOut } from 'firebase/auth';
import {auth} from '../../../src/firebase'

export default function UserState() {

    const [authUser , setAuthUser] = useState(null);

    useEffect(()=> {
        const listen = onAuthStateChanged(auth , (user) => {
            if(user){
                console.log("User is Login in",user)
            }else {
                setAuthUser(null)
            }
        })

        return () => {
            listen() 
        }
    })

  return (
    <div>
        {authUser ? <></> : <></>}
    </div>
  )
}
