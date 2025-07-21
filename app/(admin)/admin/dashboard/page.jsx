"use client"
import EditAvatarModal from '@/components/admin/EditAvatarModal'
import { useAppContext } from '@/context/appContext'
import React, { useEffect } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

const page = () => {
  const { userDetail, setUserDetail } = useAppContext()
  useEffect(()=>{console.log(userDetail)},[])
  return (
  <div className='p-8'>
     <div className='w-20 h-20  flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm my-4'>
            {
                userDetail?.avatar ? (
                    <img 
                      alt={userDetail?.name}
                      src={userDetail?.avatar}
                      className='w-full h-full'
                    />
                ) : (
                    <FaRegUserCircle size={65}/>
                )
            }
        </div>
        <div className=''>

        <EditAvatarModal  user={userDetail}/>
        </div>
  </div>
  )
}

export default page