import AdminHeader from '@/components/admin/adminHeader'
import AdminSidebar from '@/components/admin/adminSidebar'

const layout = ({ children }) => {
  return (
    <section>
      <AdminHeader />

      <AdminSidebar />

      {children}
    </section>
  )
}

export default layout
