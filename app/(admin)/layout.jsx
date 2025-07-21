
import AdminSidebar from "@/components/admin/adminSidebar"


const layout = ({ children }) => {
  return (
    <main className="grid grid-cols-2">
   
      <AdminSidebar />
      <div>
      {children}
      </div>

    </main>
  )
}

export default layout