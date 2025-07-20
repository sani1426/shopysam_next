import AdminHeader from '@/components/admin/adminHeader'
import AdminSidebar from '@/components/admin/adminSidebar'

const layout = ({ children }) => {
  return (
    <>
      <AdminHeader />

      <AdminSidebar />

      {children}
    </>
  )
}

export default layout
