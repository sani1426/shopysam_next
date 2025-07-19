"use client"
import { useAppContext } from "@/context/appContext"
import Navbar from "./Navbar"
import NavigationMenu from "./NavigationMenu"
import TopBar from "./TopBar"
import SummaryApi from "@/common"
import { useEffect } from "react"


const Header = (user , set) => {
  const {setUserDetail} = useAppContext()
  const fetchUserDetails = async () => {
    const response = await fetch(SummaryApi.userDetails.url ,{
      credentials :'include'
    })
    const data = response.json()
    setUserDetail(data?.data)
  }
  useEffect(() => {
    fetchUserDetails()
 
  }, [])
  return (
    <>
    <TopBar />
    <Navbar  user={user} set={set}/>
    <NavigationMenu />
    </>
  )
}

export default Header