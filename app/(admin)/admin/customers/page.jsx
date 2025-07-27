'use client'
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import AllUsers from '@/components/admin/customers/allUsers'
import { useEffect, useState } from 'react'
import Axios from '@/utils/axios'
import BackendApi from '@/common/api'
import { toast } from 'sonner'



const page = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  const[userCount , setUserCount]=useState()
  const { dashboardOpen } = useAppContext()
  const getAllUsers = async () => {
    try {
      setLoading(true)
      const response = await Axios({
        ...BackendApi.admin_AllUsers,
      })
      const { data: responseData } = response

      if (responseData?.success) {
        setUsers(responseData?.data)
        setUserCount(responseData?.counter)
      }
    } catch (error) {
      toast.error('error')
    } finally {
      setLoading(false)
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
