
import AxiosToastError from '@/utils/axiosToastError';
import axios from 'axios'
import React from 'react'
import Loading from '../shared/loading';
import Image from 'next/image';

const CategorySidebar = async ({categoryId}) => {
let loading = false
let subCategoryData ;
        try {
                loading = true
                const {data} = await axios.post('https://shopysam-back.onrender.com/api/subcategory/by-category-id',{
                  categoryId: categoryId
                })
              
          
                if (data?.success) {
                  subCategoryData= data?.data
                }
              } catch (error) {
                AxiosToastError(error)
              } finally {
                loading = false
              }
  return (
    <div className='w-[300px] h-screen fixed left-0 top-0 bg-red-400'>
        <div className='flex flex-col gap-4 w-full'>
                {
                        loading && <Loading />
                }
                {
                        subCategoryData?.map((c,index) => (
                                <div key={index} className='w-full flex items-center gap-3'>
                                        <Image src={c?.image} alt={c?.name} width={35} height={35} />
                                        <h1>{c?.name}</h1>
                                </div>
                        ))
                }
        </div>
    </div>
  )
}

export default CategorySidebar