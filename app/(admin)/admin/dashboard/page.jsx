"use client"
import AdminCards from '@/components/admin/adminCards'
import AdminNav from '@/components/admin/adminNav'
import AdminOrderDetails from '@/components/admin/adminOrderDetails'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'


const page = () => {
  const { dashboardOpen } = useAppContext()

  return (
    <div class={`main ${dashboardOpen && "active"}`}>
    <AdminNav />
    <AdminCards />
    <AdminOrderDetails />
  </div>
  )
}

export default page