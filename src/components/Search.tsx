import  { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {

    const [search, setSearch] = useState("")
  return (
   <div className='flex items-center space-x-2 text-gray-700'>
  <CiSearch />
  <input
  value={search}
  className='outline-none '
  onChange={(e)=>setSearch(e.target.value)}
  placeholder='Search Dashboard '
  />
   </div>
  )
}

export default Search