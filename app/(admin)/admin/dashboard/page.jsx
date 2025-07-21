"use client"
import { useAppContext } from '@/context/appContext'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

const page = () => {
  const { userDetail, setUserDetail } = useAppContext()
  return (
  <div>
     <div className='w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
            {
                userDetail.avatar ? (
                    <img 
                      alt={userDetail.name}
                      src={userDetail.avatar}
                      className='w-full h-full'
                    />
                ) : (
                    <FaRegUserCircle size={65}/>
                )
            }
        </div>
  </div>
  )
}

export default page