'use client'
import { useAppContext } from '@/context/appContext'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../shared/loading'
import CardProduct from '../shared/ProductCard'
import PaginationComponent from '../UI/Pagination'


const ProductsBySubCategory = ({ categoryId }) => {
  const { products, setProducts } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [pageNumber,setPageNumber]=useState(1)
  const [totalProduct,setTotalProduct]=useState(null)
  const [totalPage,setTotalPage]=useState(0)
  

  const getProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        'https://shopysam-back.onrender.com/api/product/by-category',
        {
          id: categoryId,
          pageNumber: pageNumber
        }
      )

      if (data?.success) {
        setProducts(data?.data)
        setTotalProduct(Number(data?.total))

        console.log('page',data?.total , totalProduct)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{
    getProducts()

  },[pageNumber])
  
  return (
        <div className='w-full'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-3 lg:gap-2 px-2'>
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
                <div className='w-full flex items-center justify-center'>
                  <PaginationComponent page={pageNumber} total={totalProduct} set={setPageNumber} />
                </div>
        </div>
  )
}

export default ProductsBySubCategory
