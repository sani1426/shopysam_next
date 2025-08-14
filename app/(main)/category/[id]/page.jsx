
import CategorySidebar from '@/components/category&subCategory/CategorySidebar'
import React from 'react'

const page = ({params , searchParams}) => {
        const {id} = params 
        const {name} = searchParams
        
  return (
        <section>
        <CategorySidebar categoryId={id} name={name} />
  
        <h1>{id}</h1>
        <h1>{name}</h1>

    </section>
  )
}

export default page