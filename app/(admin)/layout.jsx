
import AdminSidebar from "@/components/admin/adminSidebar"


const layout = ({ children }) => {
  return (
    <main className="">
   
      <AdminSidebar />
      <div className="lg:ml-[300px]">
      {children}
      </div>

    </main>
  )
}

export default layout