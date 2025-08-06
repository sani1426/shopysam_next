"use client"
import { pricewithDiscount } from '@/utils/priceWithDiscount'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { useState } from 'react'
import { IoCart } from "react-icons/io5";



const CardProduct = ({data}) => {
 
    const [loading,setLoading] = useState(false)
  
  return (
    <Link href={`/products/${data?._id}?name=${data?.name}`} className='py-2 lg:p-4 grid gap-1 lg:gap-3 min-w-36 lg:min-w-52 rounded-tr-xl rounded-bl-xl cursor-pointer bg_back-2   dark:text-gray-100 dark:border-gray-100' >
      <div className='min-h-20 w-full max-h-24 lg:max-h-32 rounded-tr-xl rounded-bl-xl overflow-hidden'>
            <img 
                src={data?.image[0]}
                className='w-full h-full object-scale-down lg:scale-125 rounded-tr-xl rounded-bl-xl'
            />
      </div>
      <div className='flex items-center justify-between'>
        <div className='rounded text-xs w-fit p-[1px] px-2 text-green-600 bg-green-50'>
              10 min 
        </div>
        <div>
            {
              Boolean(data?.discount) && (
                <p className='text-green-700 bg-green-300 px-2 w-fit text-sm rounded-full'>{data?.discount}% discount</p>
              )
            }
        </div>
      </div>
      <div className='px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2'>
        {data?.name}
      </div>
      <div className='w-full flex items-center justify-between px-5'>
      <div className='line-through text-sm text-red-600'>
             {data?.price} $
          </div>
      <div className='font-semibold text-green-600'>
              {pricewithDiscount(data?.price,data?.discount)} $
          </div>
      </div>
    

      <div className='px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-3 text-sm lg:text-base'>
        <div className='flex items-center gap-1'>
     
        <div className='font-semibold'>
        {data?.unit} 
        
      </div>
          
        </div>
        <div className=''>
          {
            data.stock == 0 ? (
              <p className='text-red-500 text-sm text-center'>Out of stock</p>
            ) : (
        //       <AddToCartButton data={data} />
        <Button className='text-white' color="success" endContent={<IoCart className='text-white text-2xl'/>}>
        Add To Cart
      </Button>
            )
          }
            
        </div>
      </div>

    </Link>
  )
}

export default CardProduct
