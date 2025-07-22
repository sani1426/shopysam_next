import AdminCards from '@/components/admin/adminCards'
import AdminNav from '@/components/admin/adminNav'
import AdminOrderDetails from '@/components/admin/adminOrderDetails'
import AdminSide from '@/components/admin/adminSide'

const layout = ({ children }) => {
  return (
    <main className='relative w-full'>
      <AdminSide />
      <div class='main'>
        <AdminNav />
        <AdminCards />
        <AdminOrderDetails />
      </div>
    </main>
  )
}

export default layout
