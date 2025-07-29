"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import AllProducts from '@/components/admin/product/allProduct'
import { useState } from 'react'


const page = () => {
        const { dashboardOpen } = useAppContext()
        const [products,setProducts]=useState([])
        const[productCount , setProductCount]=useState()
      
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />

<AllProducts data={products} productCount={productCount} />
   
      </div>
  )
}

export default page