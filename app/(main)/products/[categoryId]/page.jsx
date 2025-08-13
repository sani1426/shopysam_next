
import Axios from '@/utils/axios';
import React from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError';

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
    <section>
      
    </section>
  )
}

export default page