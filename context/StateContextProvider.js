import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

const apiKey = process.env.API_KEY;
console.log(apiKey)

export const StateContextProvider = ({ children }) => {
  // Store the result comming from the API
  const [results, setResults] = useState([])

  // Toggle to active the Loaidng component
  const [loading, setLoading] = useState(false)

  // Store the search term 
  const [searchTerm, setSearchTerm] = useState('')


  // Request
  const getResults = async (url) => {
    setLoading(true)

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': `${apiKey}`,
      },
    })

    const data = await res.json()

    setResults(data)
    setLoading(false)
  }

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
