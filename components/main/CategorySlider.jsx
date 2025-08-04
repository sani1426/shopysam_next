"use client"

import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';
import Axios from '@/utils/axios';
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError';

export default function CategorySlider() {
        const [allCat , setAllCat]=useState([])
        const [loading , setLoading]=useState(false)
        const fetchCategory = async () => {
                try {
                        setLoading(true)
                  const response = await Axios({
                    ...BackendApi.get_Categories,
                  })
                  const { data: responseData } = response
            
                  if (responseData?.success) {
                        setAllCat(responseData.data)
                        setLoading(false)
                  }
                } catch (error) {
                  AxiosToastError(error)
                } 
              }
              useEffect(()=>{
                fetchCategory()
              },[])
  return (
    <>
      <Swiper
        slidesPerView={10}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {
                loading ? (
                        allCat.map((_,index) => (
                                <SwiperSlide key={index}>
                                        <img src={_?.image} alt={_?.name} />
                                </SwiperSlide>
                        ))

                ): (
                        new Array(12).fill(null).map((c, index) => {
                                return (

                             <SwiperSlide key={index}>
                                         <div
           
                className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'
              >
                <div className='bg-blue-100 min-h-24 rounded'></div>
                <div className='bg-blue-100 h-8 rounded'></div>
              </div>
                                </SwiperSlide>
                                )
                              })
                )
        }
    
      </Swiper>
    </>
  );
}
