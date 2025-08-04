'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import { Grid, Pagination } from 'swiper/modules'
import Axios from '@/utils/axios'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'

export default function CategorySlider() {
  const [allCat, setAllCat] = useState([])
  const [loading, setLoading] = useState(false)
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
  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        breakpoints= {{
           
                320: {
                  slidesPerView: 5,
                  spaceBetween: 30
                },

                480: {
                  slidesPerView: 6,
                  spaceBetween: 20
                },
   
                640: {
                  slidesPerView: 7,
                  spaceBetween: 20
                },
                840: {
                  slidesPerView: 10,
                  spaceBetween: 10
                }
              }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className='mySwiper w-full grid'
      >
        {
         allCat.map((_, index) => (
              <SwiperSlide className='w-[60px] h-[60px]' key={index}>
                <img className='max-w-[60px] min-h-full' src={_?.image} alt={_?.name} />
              </SwiperSlide>
            ))
         }
      </Swiper>
    </>
  )
}
