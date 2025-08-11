'use client'
import React, { useEffect, useRef, useState } from 'react'

import AxiosToastError from '@/utils/axiosToastError'

import { useParams } from 'next/navigation'

import axios from 'axios'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { pricewithDiscount } from '@/utils/priceWithDiscount'
import { Button, Divider } from '@heroui/react'
import { IoCart } from 'react-icons/io5'

const page = () => {
  const params = useParams()
  const [data, setData] = useState({
    name: '',
    image: [],
  })
  const [image, setImage] = useState(0)
  const [loading, setLoading] = useState(false)
  const imageContainer = useRef()

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://shopysam-back.onrender.com/api/product/details/${params?.id}`
      )
      if (data?.success) {
        setData(data?.data)
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }
  useEffect(() => {
    fetchDetails()
  }, [])

  const handleScrollRight = () => {
    imageContainer.current.scrollLeft += 100
  }
  const handleScrollLeft = () => {
    imageContainer.current.scrollLeft -= 100
  }
  return (
    <section className='container mx-auto p-4 grid lg:grid-cols-2 '>
      <div className=''>
        <div className='bg-white lg:min-h-[65vh] lg:max-h-[65vh] rounded min-h-56 max-h-56 h-full w-full'>
          <img
            src={data?.image[image]}
            className='w-full h-full object-scale-down'
          />
        </div>
        <div className='flex items-center justify-center gap-3 my-2'>
          {data?.image.map((img, index) => {
            return (
              <div
                key={img + index + 'point'}
                className={`bg-slate-200 w-3 h-3 lg:w-5 lg:h-5 rounded-full ${
                  index === image && 'bg-slate-300'
                }`}
              ></div>
            )
          })}
        </div>
        <div className='grid relative'>
          <div
            ref={imageContainer}
            className='flex gap-4 z-10 relative w-full overflow-x-auto scrollbar-none'
          >
            {data?.image.map((img, index) => {
              return (
                <div
                  className='w-20 h-20 min-h-20 min-w-20 scr cursor-pointer shadow-md'
                  key={img + index}
                >
                  <img
                    src={img}
                    alt='min-product'
                    onClick={() => setImage(index)}
                    className='w-full h-full object-scale-down'
                  />
                </div>
              )
            })}
          </div>
          <div className='w-full -ml-3 h-full hidden lg:flex justify-between absolute  items-center'>
            <button
              onClick={handleScrollLeft}
              className='z-10 bg-white relative p-1 rounded-full shadow-lg'
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleScrollRight}
              className='z-10 bg-white relative p-1 rounded-full shadow-lg'
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div></div>

        <div className='my-4  hidden lg:grid gap-3 '>
          <div>
            <p className='font-semibold'>Description</p>
            <p className='text-base'>{data?.description}</p>
          </div>
          <div>
            <p className='font-semibold'>Unit</p>
            <p className='text-base'>{data?.unit}</p>
          </div>
        </div>
      </div>

      <div className='p-4 lg:pl-7 text-base lg:text-lg'>
        <p className='bg-green-300 w-fit px-2 rounded-full'>10 Min</p>
        <h2 className='text-lg font-semibold lg:text-3xl'>{data?.name}</h2>
        <p className=''>{data?.unit}</p>
      <Divider />
        <div>
          <p className=''>Price</p>
          <div className='flex items-center gap-2 lg:gap-4'>
            <div className='border border-green-600 px-4 py-2 rounded bg-green-50 w-fit'>
              <p className='font-semibold text-lg lg:text-xl'>
                {pricewithDiscount(data?.price, data?.discount)}
              </p>
            </div>
            {data?.discount && (
              <p className='line-through text-red-600'>{data?.price}</p>
            )}
            {data?.discount && (
              <p className='font-bold text-green-600 lg:text-2xl'>
                {data?.discount}%{' '}
                <span className='text-base text-neutral-500'>Discount</span>
              </p>
            )}
          </div>
        </div>

        {data?.stock === 0 ? (
          <p className='text-lg text-red-500 my-2'>Out of Stock</p>
        ) : (

          <div className='my-4'>
            <Button
              className='text-white'
              color='success'
              endContent={<IoCart className='text-white text-2xl' />}
            >
              Add To Cart
            </Button>
          </div>
        )}

        <h2 className='font-semibold'>Why shop from Shopysam? </h2>
        <div>
          <div className='flex  items-center gap-4 my-4'>
            <img
              src='/assets/minute_delivery.png'
              alt='superfast delivery'
              className='w-20 h-20'
            />
            <div className='text-sm'>
              <div className='font-semibold'>Superfast Delivery</div>
              <p>
                Get your orer delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>
          <div className='flex  items-center gap-4 my-4'>
            <img
              src='/assets/Best_Prices_Offers.png'
              alt='Best prices offers'
              className='w-20 h-20'
            />
            <div className='text-sm'>
              <div className='font-semibold'>Best Prices & Offers</div>
              <p>
                Best price destination with offers directly from the
                nanufacturers.
              </p>
            </div>
          </div>
          <div className='flex  items-center gap-4 my-4'>
            <img
              src='/assets/Wide_Assortment.png'
              alt='Wide Assortment'
              className='w-20 h-20'
            />
            <div className='text-sm'>
              <div className='font-semibold'>Wide Assortment</div>
              <p>
                Choose from 5000+ products across food personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>

        {/****only mobile */}
        <div className='my-4 grid gap-3 '>
          <div>
            <p className='font-semibold'>Description</p>
            <p className='text-base'>{data?.description}</p>
          </div>
          <div>
            <p className='font-semibold'>Unit</p>
            <p className='text-base'>{data?.unit}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
