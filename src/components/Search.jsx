
import {BiSearch} from 'react-icons/bi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Search = () => {
  return (
    <div className="flex relative">
        <div>
        <BiSearch className=" absolute m-2 text-3xl text-white"/>
        <input type="text" className="border bg-transparent border-white h-10 rounded-md flex-grow text-white pl-10 " />
        </div>
        <div>
          <AiOutlinePlusCircle className="text-4xl m-1 text-white cursor-pointer" />
        </div>
    </div>
  )
}

export default Search