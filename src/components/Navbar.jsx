import Fire_logo from '../assets/logos_firebase.svg'

const Navbar = () => {
  return (
    
      <div className="flex items-center justify-center text-lg gap-2 my-4 h-[60px] bg-white rounded-lg text-center">
        <img src={Fire_logo} alt="" />
        <h1>Contact app</h1> 
      </div>
    
  )
}

export default Navbar