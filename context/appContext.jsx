"use client"
import SummaryApi from '@/common'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import getCookieByName from '@/utils/getCookie.js'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [digitals , setDigitals]=useState([])
  const [clothes , setClothes]=useState([])
  const [userDetail, setUserDetail] = useState()
  const token = getCookieByName('token')
 
  // useEffect(()=>{
  //   function getCookieByName(name) {
  //     const cookies = document.cookie.split('; ');
  //     for (let cookie of cookies) {
  //         const [key, value] = cookie.split('=');
  //         if (key === name) {
  //             setToken(decodeURIComponent(value))
  //         }
  //     }
  //     return null; // Return null if the cookie is not found
  // }
  // getCookieByName('token')
  // },[])
  const fetchUserDetails = async () => {
    const { data } = await axios.get(SummaryApi.userDetails.url)
    setUserDetail(data?.data)
  }
  useEffect(() => {
    fetchUserDetails()
  }, [token])

  

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
    <AppContext.Provider value={{ theme, toggleTheme , digitals ,setDigitals,clothes,setClothes ,userDetail , setUserDetail  }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
