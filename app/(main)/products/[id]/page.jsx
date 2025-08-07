
import Axios from '@/utils/axios';
import React from 'react'
import BackendApi from '@/common/api'
import { toast } from 'sonner';

const page = async ({params}) => {
        const {id} = params
        let Product ;

        const response = await Axios({
          ...BackendApi.get_Product_Details,
          id : id ,
        })
  
        const { data: responseData } = response
  
        if (responseData?.success) {
          Product = responseData?.data
        }else{
          toast.error(responseData?.message)
        }
  return (
    <div>
      <h1>{Product?.name}</h1>
    </div>
  )
}

export default page