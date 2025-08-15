import CategorySidebar from '@/components/category&subCategory/CategorySidebar'
import ProductsBySubCategory from '@/components/category&subCategory/ProductsBySubCategory'
import React from 'react'

const page =  ({ params, searchParams }) => {
  const { id } = params
  const { name } = searchParams

  return (
    <section className='display_grid'>
      <CategorySidebar categoryId={id} name={name} />
      <ProductsBySubCategory categoryId={id}  />
    </section>
  )
}

export default page
