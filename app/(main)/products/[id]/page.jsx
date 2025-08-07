import Axios from '@/utils/axios'
import React from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'

const page =  ({ params }) => {
  const { id } = params
  let Product = {}
  const getDetails = async () => {
    try {
      const response = await Axios({
        ...BackendApi.get_Product_Details,
        id: id,
      })

      const { data: responseData } = response

      if (responseData?.success) {
        Product = responseData?.data
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }
  getDetails()
  return (
    <div>
      <h1>{Product?.name}</h1>
    </div>
  )
}

export default page
