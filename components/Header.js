import React,{useState} from 'react'
import { XIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContextProvider'



const Header = () => {

  const router = useRouter();

  // Get the search term from the input
  const [search, setSearch] = useState(""); 

  // This is a toggle to clean the input field
  const [cleanSearch, setCleanSearch] = useState(false); 

  // This is the search term comming from the context and it is used to make the request 
  const { setSearchTerm, searchTerm } = useStateContext(); 
 
  const getSearchTerm = (e)=> {
    // Get the search term coming from the input 
    setSearch(e.target.value)
  }

  const cleanSearchInput = ()=> {
    // Clean the form but don't clean the searchTerm state on the context
      setSearch("")
      setCleanSearch(true)
      document.querySelector(".form").reset();
    }
    
    const submitForm = (e) => {
      // Submit the form to make the request to the API
      e.preventDefault();

      // If search is empty the searchTerm state don't gonna changes and the request don't gonna be executed 
      if(!search) return

      setCleanSearch(false) // Set the clean toggle to false and the default value of the form will be the searchTerm state

      setSearchTerm(search) 

    return

  }

  return (
    <div className="mt-5 w-full p-10 md:ml-16">
      <div className="flex w-screen items-center justify-center text-center">
        <Image
          className="object-contain pr-10 cursor-pointer transform hover:shadow-xl shadow-red-500/50 transition-all"
          src="/bermuda.png"
          alt="logo"
          width={60}
          height={70}
          onClick={()=> router.push("/")}
        />

        <form onSubmit={submitForm} className="relative top-0 left-0 ml-10 w-full form">
          <label className="relative block w-4/5 md:w-6/12">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-5 flex items-center pl-2">
              <XIcon className="h-5 w-5 cursor-pointer fill-gray-100 text-slate-400 hover:fill-red-500 hover:text-red-500 ransform hover:scale-150 transition-all" 
                onClick={ ()=> cleanSearchInput() }
              />
            </span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon className="h-5 w-5 fill-gray-100 text-slate-400 hover:text-red-500 hover:cursor-pointer transform hover:scale-150 transition-all" 
                onClick={submitForm}
              />
            </span>
            <input
              className="block h-12 w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
              defaultValue={cleanSearch ? "" : searchTerm}
              onChange = {getSearchTerm}
            />
          </label>
        </form>
      </div>

      <Nav/>
    </div>
  )
}

export default Header
