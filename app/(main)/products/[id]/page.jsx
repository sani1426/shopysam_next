"use client"
import React, { useEffect, useState } from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import axios from 'axios'

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
 
  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div>
      <h1>{details?.name}</h1>
    </div>
  )
}

export default page
