import { useRouter } from 'next/router'
import navData from '../utils/navData'

const Nav = () => {
  const router = useRouter()
  const actualRoute = router.query.results

  const newNav = navData.map((item, i) => {
    // Build the nav whith the data comming from navData.js

    const { url, Icon, title, name } = item

    return (
      <div className="my-7" key={i}>
        <div onClick={() => router.push(`${url}`)}>
          <div className="group flex items-center  gap-1 hover:cursor-pointer group-hover:cursor-pointer">
            {
              <Icon
                className={`h-5 w-5 group-hover:text-red-500 group-active:text-red-500  ${
                  actualRoute === name ? 'text-red-500' : 'text-gray-500'
                }`}
              />
            }
            <span
              className={`group-hover:text-red-500 ${
                actualRoute === name ? 'text-red-500' : 'text-gray-500'
              }`}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    )
  })

  // this is where the component is returned

  return (
    <div className="flex w-11/12 items-center gap-x-6  border-b drop-shadow-md">
      {newNav}
    </div>
  )
}

export default Nav
