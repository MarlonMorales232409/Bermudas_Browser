import React, { useEffect } from 'react'
import { Loading } from './Loading'
import { useStateContext } from '../context/StateContextProvider'
// Result nav pages
import All from './navPages/All'
import Images from './navPages/Images'
import Videos from './navPages/Videos'
import News from './navPages/News'

const ResultData = ({ url }) => {
  const { results, loading, getResults, searchTerm } = useStateContext()

  useEffect(() => {
    // Controls if we'll request videos or not
    if (searchTerm !== '') {
      if (url === 'videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else if (url === 'all') {
        getResults(`/search/q=${searchTerm}&num=40`)
      } else {
        getResults(`/${url}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, url])

  // Show a loading on the screen when we make a new request
  if (loading) return <Loading />

  // Depending of the URL we goint to render a diferent component

  switch (url) {
    case 'all':
      return <All results={results} />

    case 'images':
      return <Images results={results} />

    case 'videos':
      return <Videos results={results} />

    case 'news':
      return <News results={results} />

    default:
      return <div></div>
  }
}

export default ResultData
