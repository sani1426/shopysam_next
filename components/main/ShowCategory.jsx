'use client'

import Axios from '@/utils/axios'
import BackendApi from '@/common/api'
import AxiosToastError from '@/utils/axiosToastError'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const ShowCategory = () => {
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
        setLoading(false)
        setAllCat(responseData.data)
     
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }
  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <div className='container mx-auto px-4 my-4 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10  gap-2'>
      {!loading ? (
        <>
          {allCat?.map((cat, index) => {
            return (
              <div
                key={cat._id + 'displayCategory'}
                className='w-full h-full '
                // onClick={() => handleRedirectProductListpage(cat._id, cat.name)}
              >
                <div>
                  <Image
                    src={cat.image}
                    className=' object-scale-down'
                    width={60}
                    height={60}
                    loading='lazy'
                    placeholder='blur'
                  />
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <>
          {new Array(12).fill(null).map((c, index) => {
            return (
              <div
                key={index + 'loadingcategory'}
                className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'
              >
                <div className='bg-blue-100 min-h-24 rounded'></div>
                <div className='bg-blue-100 h-8 rounded'></div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default ShowCategory
