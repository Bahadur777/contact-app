
import { useState } from 'react'
import './App.css'
import Navbar from './conponents/Navbar'
import Search from './conponents/Search'

function App() {
   
  const [contacts, setContacts] = useState([]);



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
