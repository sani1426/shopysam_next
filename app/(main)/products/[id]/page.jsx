"use client"
import React, { useEffect, useState } from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'


import { useParams } from 'next/navigation'
import Axios from '@/utils/axios'
import axios from 'axios'

const page =  () => {

const [details , setDetails]=useState()
  const {id} =  useParams()

  const fetchDetails = async () => {
     const response = await fetch(`${BackendApi.get_Product_Details.url}/${id}`)
     const data = await response.json()

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
