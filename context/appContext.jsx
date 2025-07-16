"use client"
import { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )
  const [digitals , setDigitals]=useState([])
  const [clothes , setClothes]=useState([])
  const [digitalBrand , setDigitalBrand]=useState([])
  const [clothBrand , setClothBrand]=useState([])
  const [userDetail, setUserDetail] = useState()


  

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <AppContext.Provider value={{ theme, toggleTheme , digitals ,setDigitals,clothes,setClothes ,userDetail , setUserDetail ,digitalBrand,setDigitalBrand , clothBrand , setClothBrand }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
