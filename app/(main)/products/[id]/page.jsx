"use client"
import React, { useEffect, useState } from 'react'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'


import { useParams } from 'next/navigation'
import Axios from '@/utils/axios'

const page =  () => {

const [details , setDetails]=useState()
  const  params =  useParams()

  const fetchDetails = async () => {
    console.log(params)
    try {
      const {id} = await params
      const response = await Axios({
        ...BackendApi.get_Product_Details,
       id: id ,
      })

      const { data: responseData } = response

      if (responseData?.success) {
setDetails(responseData?.data)
      }
    } catch (error) {
      AxiosToastError(error)
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
