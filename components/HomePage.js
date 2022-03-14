import Image from 'next/image'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { SocialIcon } from 'react-social-icons'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContextProvider'
import { socialItems } from '../utils/navData'

const HomePage = () => {

  // This form works in the same way as the Header form, but with the difference
  // that we don't have the toggle to clean it 

  const { setSearchTerm } = useStateContext()

  const router = useRouter()

  const [search, setSearch] = useState('')

  const getSearchTerm = (e) => {
    setSearch(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (!search) return

    setSearchTerm(search)
    // redirect the app to the main screen (/all) url, here we goin to find a lot of links comming from the api 
    // and the menu to search between the diferent options for example photos or videos  
    router.push('/all')
    return
  }

  const socialItemsContainer = socialItems.map((icon,i) => {

    // socialItemContainer show all social icons on the main screen 
    // reusing the <SocialIcon /> component but with diferents props

    const { url, title } = icon

    return (
      <div className="group cursor-pointer" key={i}>
        <SocialIcon
          url={url}
          className=" mb-4 transform transition-all group-hover:scale-125"
        />
        <p className="tracking-widest opacity-0 transition-all group-hover:opacity-100">
          {title}
        </p>
      </div>
    )
  })

  return (
    <div className="h-screen w-full">
      <div className="mt-24 flex w-screen flex-col items-center justify-center text-center">
        <Image
          className="object-contain"
          src="/bermuda.png"
          alt="logo"
          width={150}
          height={220}
        />

        <form onSubmit={submitForm} className="relative block w-4/5 md:w-6/12">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 right-4 flex items-center pl-2">
            <SearchIcon
              className="h-5 w-5 transform fill-gray-100 text-slate-400 transition-all hover:scale-150 hover:cursor-pointer hover:text-red-500"
              onClick={submitForm}
            />
          </span>
          <input
            className="block h-12 w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            onChange={getSearchTerm}
          />
        </form>

        <div className="grid grid-cols-4 gap-x-2 gap-y-12 py-10 text-gray-500 md:gap-x-20 md:gap-y-20 ">
          {socialItemsContainer}
        </div>
      </div>
    </div>
  )
}

export default HomePage
