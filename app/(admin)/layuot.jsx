import AdminSidebar from "@/components/admin/adminSidebar"


const layout = ({ children }) => {
        return (
          <section>
            <div className="container mx-auto p-3">
              <div>
                <div>
                <AdminSidebar />
                </div>
                <div>
                {children}
                </div>
              </div>
            </div>
              
          </section>
        )
      }
      
      export default layout