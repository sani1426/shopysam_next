
import CategorySidebar from '@/components/category&subCategory/CategorySidebar'
import React from 'react'

const page = ({params , searchParams}) => {
        const {id} = params 
        const {name} = searchParams
        
  return (
        <section>
        <CategorySidebar categoryId={id} name={name} />
  
      

    </section>
  )
}

export default page