import React ,{useState , useEffect}from 'react'
import { initializeApp } from 'firebase/app';
import Table from './pages/Table'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged ,getAuth } from "firebase/auth";
import {auth} from '../../src/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../src/firebase'; 

export default function ActiveUser() {

    const [authUser, setAuthUser] = useState(null);
    const [users , setUsers] = useState([])
    const navigate = useNavigate()
  
    async function getAllActiveUsers() {
      const usersCollection = collection(firestore, 'users');
      const activeUsersQuery = query(usersCollection, where('status', '==', 'active'));
  
      const activeUsersSnapshot = await getDocs(activeUsersQuery);
      const activeUsers = activeUsersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }));
  
      console.log(activeUsers)
      return activeUsers;
  }
  
    

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }
        });
    
        return () => {
          listen();
        };
      }, []);


 
     

  return (
    <div>
      {users}
        {authUser ? <Table/> : navigate('/')}
    </div>
  )
}
