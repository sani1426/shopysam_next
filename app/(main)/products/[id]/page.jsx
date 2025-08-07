
import Axios from '@/utils/axios';
import React from 'react'
import BackendApi from '@/common/api'
import { toast } from 'sonner';
import axios from 'axios';

const page = async ({params}) => {
        const {id} = params


    //  const {data} = await axios.post(BackendApi?.get_Product_Details?.url , {
    //   id
    //  })
    // const Product = await data?.data
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default page