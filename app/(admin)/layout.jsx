
import AdminSide from '@/components/admin/adminSide'

const layout = ({ children }) => {
  return (
    <main className='relative w-full '>
      <AdminSide />
      {children}
    </main>
  )
}

export default layout
