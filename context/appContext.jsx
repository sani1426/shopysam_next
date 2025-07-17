"use client"
import SummaryApi from '@/common'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [digitals , setDigitals]=useState([])
  const [clothes , setClothes]=useState([])
  const [digitalBrand , setDigitalBrand]=useState([])
  const [clothBrand , setClothBrand]=useState([])
  const [userDetail, setUserDetail] = useState()

 
  const fetchUserDetails = async () => {
    const { data } = await axios(SummaryApi.userDetails.url)
    setUserDetail(data?.data)
  }
  useEffect(() => {
    fetchUserDetails()
  }, [])

  

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
