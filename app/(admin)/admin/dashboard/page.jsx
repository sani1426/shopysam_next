"use client"
import AdminCards from '@/components/admin/adminCards'
import AdminNav from '@/components/admin/adminNav'
import AdminOrderDetails from '@/components/admin/adminOrderDetails'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '@/common'


const page = () => {
  const { dashboardOpen } = useAppContext()
  const [allUsers , setAllUsers]= useState()
  const [countUsers , setCountUsers]= useState()
const getAllUsers = async () => {
  const { data } = await axios.get(SummaryApi.admin_AllUsers.url)
  if (data?.success) {
    setAllUsers(data?.data)
    setCountUsers(data?.counter)
  }
}
useEffect(()=>{
  getAllUsers()
},[])
  

  return (
    <div class={`main ${dashboardOpen && "active"}`}>
    <AdminNav />
    <AdminCards countUsers={countUsers} />
    <AdminOrderDetails allUsers={allUsers} />
  </div>
  )
}

export default page