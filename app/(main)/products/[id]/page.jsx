import Axios from '@/utils/axios'
import React from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'

const page = async  ({ params }) => {

   let details
  const { id } = await params

  const { data } = await axios.post(BackendApi?.get_Product_Details?.url , {
    id
  })
  if (data.success) {
    details = data?.data
  }
  return (
    <div>
      <h1>{details?.name}</h1>
    </div>
  )
}

export default page
