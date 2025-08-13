
import Axios from '@/utils/axios';
import React from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError';
import ProductNewCard from '@/components/main/ProductNewCard';

const page = async ({params}) => {
        const {categoryId} = params
        let products ;

        try {
          const response = await Axios({
            ...BackendApi.get_Product_ByCategory,
            id : categoryId
          })
          const { data: responseData } = response
    
          if (responseData?.success) {
           products = responseData?.data
          }
        } catch (error) {
          AxiosToastError(error)
        } 
  return (
    <section className='w-full '>
      <div className='container w-full mx-auto flex flex-col'>
        {
          products?.map((p,index) => (
            <ProductNewCard key={index} data={p} />
          ))
        }
      </div>
    </section>
  )
}

export default page