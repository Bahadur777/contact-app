
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import{collection, getDocs} from "firebase/firestore"
import {db} from "./confing/firebase"

function App() {
   
  const [contacts, setContacts] = useState([]);
  useEffect(()=>{
    const getContacts = async()=>{
      try {
        const contactsCollection = collection(db,"contacts-app");
        const contactsSnap = await getDocs(contactsCollection);
        console.log(contactsSnap);
        const contactLists = contactsSnap.docs.map((docs)=>{
          return{
            id: docs.id,
            ...docs.data()
          }
        })
        console.log(contactLists);
      } catch(error){
        console.log(error)
      }
    }
  },[])



  return (
    <div className='mx-auto max-w-[370px]'>
     <Navbar/>
     <div>
      <Search/>
     </div>
    </div>
  )
}

export default App
