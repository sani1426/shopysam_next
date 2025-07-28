'use client'
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import AllUsers from '@/components/admin/customers/allUsers'
import { useEffect, useState } from 'react'

import SummaryApi from '@/common'
// import AllCustomers from '@/components/admin/customers/allCustomers'



const page = () => {
  const [users,setUsers]=useState([])
  const[userCount , setUserCount]=useState()
  const { dashboardOpen } = useAppContext()
  const getAllUsers = async () => {
    const response = await fetch(SummaryApi.admin_AllUsers.url ,{
      credentials :'include'
    })
    const data = await response.json()
    if (data?.success) {
      setUsers(data?.data)
      setUserCount(data?.counter)
    }
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <div class={`main ${dashboardOpen && 'active'}`}>
      <AdminNav />
      <AllUsers users={users} userCount={userCount} />
    </div>
  )
}

export default page
