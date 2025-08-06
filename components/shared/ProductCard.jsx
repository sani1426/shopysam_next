"use client"
import { pricewithDiscount } from '@/utils/priceWithDiscount'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { useState } from 'react'
import { IoCart } from "react-icons/io5";



const CardProduct = ({data}) => {
 
    const [loading,setLoading] = useState(false)
  
  return (
    <Link href={`/products/${data?._id}`} className='border py-2 lg:p-4 grid gap-1 lg:gap-3 min-w-36 lg:min-w-52 rounded-xl cursor-pointer bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-100' >
      <div className='min-h-20 w-full max-h-24 lg:max-h-32 rounded-t-xl overflow-hidden'>
            <img 
                src={data?.image[0]}
                className='w-full h-full object-scale-down lg:scale-125 rounded-t-xl'
            />
      </div>
      <div className='flex items-center gap-1'>
        <div className='rounded text-xs w-fit p-[1px] px-2 text-green-600 bg-green-50'>
              10 min 
        </div>
        <div>
            {
              Boolean(data?.discount) && (
                <p className='text-green-600 bg-green-100 px-2 w-fit text-xs rounded-full'>{data?.discount}% discount</p>
              )
            }
        </div>
      </div>
      <div className='px-2 lg:px-0 font-medium text-ellipsis text-sm lg:text-base line-clamp-2'>
        {data?.name}
      </div>
      <div className='w-fit gap-1 px-2 lg:px-0 text-sm lg:text-base'>
        {data?.unit} 
        
      </div>

      <div className='px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-3 text-sm lg:text-base'>
        <div className='flex items-center gap-1'>
          <div className='font-semibold'>
              {pricewithDiscount(data?.price,data?.discount)} $
          </div>
          
          
        </div>
        <div className=''>
          {
            data.stock == 0 ? (
              <p className='text-red-500 text-sm text-center'>Out of stock</p>
            ) : (
        //       <AddToCartButton data={data} />
        <Button className='text-white' color="success" endContent={<IoCart className='text-white'/>}>
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
