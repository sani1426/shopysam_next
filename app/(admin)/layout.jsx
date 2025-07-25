
import AdminSide from '@/components/admin/adminSide'

const layout = ({ children }) => {
  return (
    <main className='relative w-full overflow-x-hidden'>
      <AdminSide />
      {children}
    </main>
  )
}

export default layout
