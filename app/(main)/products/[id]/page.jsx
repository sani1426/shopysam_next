import Axios from '@/utils/axios'
import React from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'
import Details from '@/components/main/details'

const page = async  ({ params }) => {

   let details
  const { id } = await params

  const { data } = await axios.get(`${BackendApi?.get_Product_Details?.url}/${id}`)
  if (data?.success) {
    details = data?.data
  }
  return (
    <div>
      <Details data={details} />
    </div>
  )
}

export default page
