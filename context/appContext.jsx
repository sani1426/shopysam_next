"use client"

import SummaryApi from '@/common'
import Axios from '@/utils/axios'
import { createContext, useContext, useEffect, useState } from 'react'
import BackendApi from '@/common/api'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [digitals , setDigitals]=useState([])
  const [clothes , setClothes]=useState([])
  const [allCategory , setAllCategory] = useState([])
  const [userDetail, setUserDetail] = useState()
  const [dashboardOpen, setDashboardOpen] = useState(true)
  const fetchUserDetails = async () => {
    const response = await fetch(SummaryApi.userDetails.url ,{
      credentials :'include'
    })
    const data = await response.json()
    setUserDetail(data?.data)
  }
  const fetchCategory = async () => {
    try {
      const response = await Axios({
        ...BackendApi.get_Categories,
      })
      const { data: responseData } = response

      if (responseData?.success) {
        setAllCategory(responseData.data)
      }
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchUserDetails()
    fetchCategory()
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
    <AppContext.Provider value={{ theme, toggleTheme , digitals ,setDigitals,clothes,setClothes ,userDetail , setUserDetail ,dashboardOpen, setDashboardOpen ,allCategory , setAllCategory}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
