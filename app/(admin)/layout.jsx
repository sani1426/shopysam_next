import AdminHeader from "@/components/admin/adminHeader"
// import AdminSidebar from "@/components/admin/adminSidebar"


const layout = ({ children }) => {
  return (
    <main>
      <AdminHeader />
      {/* <AdminSidebar /> */}
        {children}
    </main>
  )
}

export default layout