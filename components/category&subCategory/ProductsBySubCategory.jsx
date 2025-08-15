'use client'
import { useAppContext } from '@/context/appContext'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../shared/loading'
import CardProduct from '../shared/ProductCard'

const ProductsBySubCategory = ({ categoryId }) => {
  const { products, setProducts } = useAppContext()
  const [loading, setLoading] = useState(false)
  const getProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        'https://shopysam-back.onrender.com/api/product/by-category',
        {
          id: categoryId,
        }
      )

      if (data?.success) {
        setProducts(data?.data)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{getProducts()},[])
  
  return (
        <div className='w-full'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                                loading && <Loading />
                        }
                        {
                                products?.map((p,index) => (
                                        <CardProduct
                                        data={p}
                                        key={index}
                                    />
                                ))
                        }
                </div>
        </div>
  )
}

export default ProductsBySubCategory
