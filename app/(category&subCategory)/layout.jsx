import CategorySidebar from "@/components/category&subCategory/CategorySidebar"
import Header from "@/components/shared/Header"


const layout = ({ children }) => {
  return (
    <div className=''>
      <Header  />
      <CategorySidebar />
      {children}
     </div>
  )
}

export default layout
