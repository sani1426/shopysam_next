"use client"
import AdminNav from '@/components/admin/adminNav'
import { useAppContext } from '@/context/appContext'
import '@/components/admin/admin.css'
import AllProducts from '@/components/admin/product/allProduct'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import Axios from '@/utils/axios'
import BackendApi from '@/common/api'


const page = () => {
        const { dashboardOpen } = useAppContext()
        const [products,setProducts]=useState([])
        const[productCount , setProductCount]=useState()

        const getAllProducts = async () => {
          try {
            const response = await Axios({
              ...BackendApi.get_Products,
            })
            const { data: responseData } = response
      
            if (responseData?.success) {
              setProducts(responseData?.data)
              setProductCount(responseData?.counter)
            }
          } catch (error) {
            toast.error('error')
          }
        }
      
        useEffect(()=>{
          getAllProducts()
        },[])
  return (
        <div class={`main ${dashboardOpen && "active"}`}>
        <AdminNav />

<AllProducts products={products} productCount={productCount} />
   
      </div>
  )
}

export default page