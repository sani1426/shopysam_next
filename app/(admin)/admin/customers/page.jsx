"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'

import AllUsers from '@/components/admin/allUsers'

const page = () => {
        const { dashboardOpen } = useAppContext()
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />
        <AllUsers />
      </div>
  )
}

export default page