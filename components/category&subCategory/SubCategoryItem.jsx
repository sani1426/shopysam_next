"use client"

import { useAppContext } from '@/context/appContext'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const SubCategoryItem = ({data}) => {
   const {setProducts}= useAppContext()
   const id = data?._id

   const getProducts = async () => {
     try {
       const { data } = await axios.post(
         'https://shopysam-back.onrender.com/api/product/by-subcategory',
         {
         subCategoryId:id
         }
       )
 
       if (data?.success) {
         setProducts(data?.data)
       }
     } catch (error) {
       AxiosToastError(error)
     } 
   }

  return (
        <div onClick={getProducts}  className='pl-2 w-full flex items-center gap-5 bg_hover cursor-pointer'>
        <Image src={data?.image} alt={data?.name} width={60} height={60} className='object-cover' />
        <h1 className=''>{data?.name}</h1>
</div>
  )
}

export default SubCategoryItem