"use client"
import React, { useState } from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'
import Details from '@/components/main/details'
import { useParams } from 'next/navigation'

const page =  () => {

const [details , setDetails]=useState()
  const  {id} = useParams()

  const fetchDetails = async () => {
    const { data } = await axios.get(`${BackendApi?.get_Product_Details?.url}/${id}`)
    if (data?.success) {
      setDetails(data?.data)
    }
  }
 
  return (
    <div>
      <Details data={details} />
    </div>
  )
}

export default page
