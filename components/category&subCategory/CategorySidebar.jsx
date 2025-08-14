
import AxiosToastError from '@/utils/axiosToastError';
import axios from 'axios'
import React from 'react'
import Loading from '../shared/loading';
import Image from 'next/image';

const CategorySidebar = async ({categoryId,name}) => {
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
    <div className='w-[300px] h-screen fixed left-0 top-[9rem] lg:top[13rem] shadow-lg'>
        <div className='flex items-center justify-center py-4 bg-gray-200'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
        </div>
        <div className='flex flex-col gap-3 w-full mt-3'>
                {
                        loading && <Loading />
                }
                {
                        subCategoryData?.map((c,index) => (
                                <div key={index} className='pl-2 w-full flex items-center gap-5  hover:bg-gray-200 transition-all duration-200'>
                                        <Image src={c?.image} alt={c?.name} width={60} height={60} />
                                        <h1 className=''>{c?.name}</h1>
                                </div>
                        ))
                }
        </div>
    </div>
  )
}

export default CategorySidebar