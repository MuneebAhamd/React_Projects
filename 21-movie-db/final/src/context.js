import React, { useState, useContext, } from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPZOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=ab073ffc`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('Jawan')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)
  console.log("isLoading", useFetch);
  
  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

